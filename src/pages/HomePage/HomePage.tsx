import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import useFirebaseMessaging from '@useweb/firebase/useFirebaseMessaging'

import CopyToClipboard from '../../lib/components/CopyToClipboard/CopyToClipboard'
import Text from '../../lib/components/Text/Text'
import Header from '../../lib/components/_unique/Header/Header'
import useSnackbar from '../../lib/components/Snackbar/Snackbar'
import Link from '../../lib/components/Link/Link'
import ZoomImage from '../../lib/components/ZoomImage/ZoomImage'

export default function HomePage() {
  const snackbar = useSnackbar()

  const firebaseMessaging = useFirebaseMessaging({
    onMessage: (message) => {
      console.log(`Received foreground message`, message)
      snackbar.show({
        message: message?.notification?.title || message?.data?.title,
      })
    },
  })

  useEffect(() => {
    firebaseMessaging.init()
  }, [])

  return (
    <Box>
      <Header
        title='Firebase Messaging Push Notification Example'
        tutorialLink='how-to-send-push-notifications-with-firebase-and-react'
        repoLink='https://github.com/jeremytenjo/how-to-send-push-notifications-with-firebase-and-react'
      />
      {firebaseMessaging.initializing && <InitializingFirebaseMessaging />}
      {firebaseMessaging.error && (
        <FirebaseMessagingError error={firebaseMessaging.error.toString()} />
      )}
      {firebaseMessaging.fcmRegistrationToken && (
        <>
          <CopyRegistrationToken
            fcmRegistrationToken={firebaseMessaging.fcmRegistrationToken}
          />
          <FirebaseMessagingConsoleLink />
        </>
      )}
    </Box>
  )
}

const InitializingFirebaseMessaging = () => {
  return (
    <>
      <Text
        text='Initializing Firebase Messaging (enable notifications for this page)'
        sx={{ mb: 2 }}
      />
      <LinearProgress />
    </>
  )
}

const FirebaseMessagingError = ({ error }) => {
  return <Text text={error} sx={{ color: 'red' }} />
}

const CopyRegistrationToken = ({ fcmRegistrationToken }) => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          mb: 1,
          gridGap: '10px',
        }}
      >
        <Text text='FCM Registration Token:' />
        <CopyToClipboard text={fcmRegistrationToken}>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Box>

      <Text
        text={fcmRegistrationToken}
        sx={{
          width: '100%',
          overflowWrap: 'break-word',
          fontSize: '14px',
          color: 'grey.main',
        }}
      />
    </>
  )
}

const FirebaseMessagingConsoleLink = () => {
  return (
    <Box sx={{ mt: '20px', display: 'grid', gridGap: '10px' }}>
      <Link href='https://console.firebase.google.com/' newTab>
        Send notifications from the Firebase Console
      </Link>
      <ZoomImage
        src='https://www.jeremytenjo.com/images/tutorials/how-to-send-push-notifications-with-firebase-and-react/firebase-messaging-2.png'
        alt='Firebase cloud messaging compose notification dashboard'
        sx={{ width: '100%', maxWidth: '340px' }}
      />
    </Box>
  )
}
