import admin from 'firebase-admin'

import firebaseJson from '../../../../../../firebase.json'
import firebaseConfig from '../../../../../services/firebase/firebase.config.js'

import addMockDataToFirestore from './handlers/addFirestoreEmulatorData.js'
import addAuthEmulatorData from './handlers/addAuthEmulatorData.js'

const addFirestoreData = firebaseJson?.emulators?.firestore?.port
const addAuthData = firebaseJson?.emulators?.auth?.port

addFirestoreData &&
  (process.env.FIRESTORE_EMULATOR_HOST = `localhost:${firebaseJson.emulators.firestore.port}`)

addAuthData &&
  (process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${firebaseJson.emulators.auth.port}`)

admin.initializeApp(firebaseConfig)

const db = admin.firestore()
const auth = admin.auth()

export default async function addEmulatorData() {
  const createdUserId = addAuthData ? await addAuthEmulatorData({ auth }) : 'null'
  await addMockDataToFirestore({ db, createdUserId })
}
