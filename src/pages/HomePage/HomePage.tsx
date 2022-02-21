import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import useFirebaseMessaging from '@useweb/use-firebase-messaging'

import Text from '../../lib/components/Text/Text'
import Header from '../../lib/components/_unique/Header/Header'
import useSnackbar from '../../lib/components/Snackbar/Snackbar'

export default function HomePage() {
  const snackbar = useSnackbar()

  const firebaseMessaging = useFirebaseMessaging({
    onMessage: (message) => {
      console.log(`Received foreground message`, message)
      snackbar.show({ message: message?.notification?.title || message?.data?.title })
    },
  })

  useEffect(() => {
    firebaseMessaging.init()
  }, [])

  return (
    <Box>
      <Header
        title='How to use Firebase Messaging with React'
        tutorialLink='how-to-use-firebase-messaging-with-react'
        repoLink='https://github.com/jeremytenjo/how-to-use-firebase-messaging-with-react'
      />

      {firebaseMessaging.initializing && (
        <>
          <Text
            text='Initializing Firebase Messaging (enable notifications for this page)'
            sx={{ mb: 2 }}
          />
          <LinearProgress />
        </>
      )}

      {firebaseMessaging.error && (
        <Text text={firebaseMessaging.error.toString()} sx={{ color: 'red' }} />
      )}

      {firebaseMessaging.fcmRegistrationToken && (
        <>
          <Text text='FCM Registration Token:' sx={{ mb: 1 }} />

          <Text
            text={firebaseMessaging.fcmRegistrationToken}
            sx={{
              width: '100%',
              overflowWrap: 'break-word',
              fontSize: '14px',
              color: 'grey.main',
            }}
          />
        </>
      )}
    </Box>
  )
}
