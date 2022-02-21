import mockDatabase from '../../../../../../data/_emulator/mockDatabase/mockDatabase.js'

/**
 * [Docs](https://firebase.google.com/docs/emulator-suite/connect_firestore)
 */
export default async function addMockDataToFirestore({ db, createdUserId }) {
  try {
    mockDatabase.map((collection) => {
      collection.data.map((collectionData) => {
        // https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
        if (collection.documentIdIsCreatedUserId) {
          db.collection(collection.name).doc(createdUserId).set(collectionData)
        } else {
          db.collection(collection.name).add(collectionData)
        }
      })
    })

    console.log('Database seed was successful')
  } catch (error) {
    console.log(error, 'Database seed failed')
  }
}
