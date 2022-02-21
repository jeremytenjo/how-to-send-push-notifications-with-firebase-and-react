import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import getAppConfig from '../../app.config'

import _sendNotification from './sendNotification/sendNotification'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

// https://firebase.google.com/docs/functions/get-started

export const sendNotification = functions.https.onRequest(async (req, res) => {
  const appConfig = await getAppConfig()
  res.set('Access-Control-Allow-Origin', appConfig.domain.main)

  try {
    const payload = JSON.parse(req.body)
    const result = await _sendNotification({ payload })

    res.status(200).json(result)
  } catch (error: any) {
    console.error(new Error(error))
    res.status(500).json({
      error: error.toString(),
    })
  }
})
