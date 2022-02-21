import functions from 'firebase-functions'
import admin from 'firebase-admin'

type Props = {
  title: string
  icon?: string
  body?: string
  actions?: {
    action: string
    title: string
    icon: string
  }[]
  registrationTokens: string[]
}

export default async function sendFCMMessage(props: Props) {
  const messaging = admin.messaging()
  const message = {
    data: {
      title: props.title,
      icon: props.icon || '',
      body: props.body || '',
      actions: props.actions ? JSON.stringify(props.actions) : '',
    },
    tokens: props.registrationTokens,
  }

  functions.logger.info('FCM Message', message)

  //https://firebase.google.com/docs/cloud-messaging/send-message#send-messages-to-multiple-devices
  const response = await messaging.sendMulticast(message)

  if (response.failureCount > 0) {
    const failedTokens: string[] = []
    response.responses.forEach((resp, idx) => {
      if (!resp.success) {
        failedTokens.push(props.registrationTokens[idx])
        functions.logger.error(resp.error)
      }
    })
  } else {
    functions.logger.info(response.successCount + ' messages were sent!')
  }
}
