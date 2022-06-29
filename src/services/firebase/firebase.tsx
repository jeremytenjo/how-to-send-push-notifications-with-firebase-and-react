import React from 'react'
import { FirebaseProvider } from '@useweb/firebase/useFirebase'
import { initializeApp } from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

import firebaseConfig from './firebase.config'

const firebaseApp = initializeApp(firebaseConfig)
const messagingIsSupported = await isSupported()
const messaging = messagingIsSupported ? getMessaging(firebaseApp) : undefined

const envIsDev = process.env.NODE_ENV === 'development'
const vapidKey =
  'BM57dh_T-lH928u8x-JhIqnkzySq1b93X_rCc4_c8VUiXLxAwiZyHCzlGj4jf0GM6_Bf9-bnWs-YaLe2q-9kdo8'

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      envIsDev={envIsDev}
      messaging={messaging}
      messagingOptions={{
        vapidKey,
      }}
    >
      {children}
    </FirebaseProvider>
  )
}
