import React from 'react'
import { FirebaseProvider } from '@useweb/use-firebase'
import { initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions'
import { getMessaging } from 'firebase/messaging'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import firebaseJson from '../../../firebase.json'
import testUser from './emulator/testUser'
import firebaseConfig from './firebase.config'

const firebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions(firebaseApp)
const messaging = getMessaging(firebaseApp)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

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
      functions={functions}
      db={db}
      dbOptions={{ dbEmulatorPort: firebaseJson.emulators.firestore.port }}
      auth={auth}
      authOptions={{
        testUserEmail: testUser.email,
        testUserPassword: testUser.password,
        authEmulatorPort: firebaseJson.emulators.auth.port,
      }}
    >
      {children}
    </FirebaseProvider>
  )
}
