import React from 'react'
import { initializeApp } from 'firebase/app'
import { FirebaseProvider } from '@useweb/use-firebase'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyDzA_JxwNXn8u3paYgEa7TB_wz6xCKUq2g',
  authDomain: 'jeremy-tenjo-tutorials.firebaseapp.com',
  projectId: 'jeremy-tenjo-tutorials',
  storageBucket: 'jeremy-tenjo-tutorials.appspot.com',
  messagingSenderId: '237035005827',
  appId: '1:237035005827:web:5b22520f6a39a70af2f8b6',
  measurementId: 'G-FE6WB28341',
}
const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp)

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      envIsDev={process.env.NODE_ENV === 'development'}
      messaging={messaging}
    >
      {children}
    </FirebaseProvider>
  )
}
