import users from '../../users/users.stubs.js'

// used by src/services/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData.ts
export default [
  {
    name: 'users',
    data: users,
    documentIdIsCreatedUserId: true,
  },
]
