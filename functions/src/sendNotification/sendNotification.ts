import sendFCMMessage from '../utils/firebase/messaging/sendFCMMessage/sendFCMMessage.js'

type SendNotificationProps = {
  payload: {
    fcmRegistrationToken: string
  }
}

export default async function sendNotification({ payload }: SendNotificationProps) {
  const title = `Hello from 'sendNotification' cloud notification`
  await sendFCMMessage({
    title: title,
    icon: `/images/logo/assets/logo.png`,
    registrationTokens: [payload.fcmRegistrationToken],
  })

  return title
}
