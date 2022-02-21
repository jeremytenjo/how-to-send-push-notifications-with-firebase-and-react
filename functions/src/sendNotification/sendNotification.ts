type SendNotificationProps = {
  payload: {
    name: string
  }
}

export default async function sendNotification({ payload }: SendNotificationProps) {
  const result = { name: `hello my name is ${payload.name}` }

  return result
}
