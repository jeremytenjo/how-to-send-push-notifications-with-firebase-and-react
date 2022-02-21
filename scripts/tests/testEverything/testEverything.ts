import shell from '../../../devtools/utils/node/shell.cjs'
import runCypress from '../../../devtools/testing/cypress/scripts/runCypress/runCypress.js'

export default async function testEverything() {
  try {
    await shell('npm run test:eslint')
    await shell('npm run test:ts-types')
    await runCypress()
  } catch (error) {
    throw new Error(error)
  }
}
