import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import useFirebaseMessaging from '@useweb/use-firebase-messaging'
import useFirebaseFunction from '@useweb/use-firebase-function'

import Text from '../../lib/components/Text/Text'
import Header from '../../lib/components/_unique/Header/Header'
import AsyncResult from '../../lib/components/AsyncResult/AsyncResult'
import useSnackbar from '../../lib/components/Snackbar/Snackbar'

export default function HomePage() {
  const [fcmRegistrationToken, setFcmRegistrationToken] = useState('')
  const snackbar = useSnackbar()

  const messaging = useFirebaseMessaging({
    onFcmRegistrationToken: (fcmRegistrationToken) => {
      console.log({ fcmRegistrationToken })
      setFcmRegistrationToken(fcmRegistrationToken)
    },
    onMessage: (message) => {
      console.log({ message })
      snackbar.show({ message: message.data.title })
    },
  })

  useEffect(() => {
    messaging.init()
  }, [])

  const sendNotifcation = useFirebaseFunction({ name: 'sendNotification' })

  return (
    <Box>
      <Header
        title='How to use Firebase Messaging with React'
        tutorialLink='how-to-use-firebase-messaging-with-react'
      />

      <Text text='FCM Registration Token:' sx={{ mb: 1 }} />

      {fcmRegistrationToken && (
        <Text
          text={fcmRegistrationToken}
          sx={{
            width: '100%',
            overflowWrap: 'break-word',
            fontSize: '14px',
            color: 'grey.main',
          }}
        />
      )}

      <AsyncResult
        asyncFunction={sendNotifcation}
        successMessage={'Notification send successfully!'}
        triggerButtonText='Trigger Notification'
        functionPayload={{ data: { fcmRegistrationToken } }}
      />
    </Box>
  )
}
