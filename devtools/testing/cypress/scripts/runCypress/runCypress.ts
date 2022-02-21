import cypress from 'cypress'

import getCypressConfig from '../../cypress.config.js'
import runDev from '../../../../../scripts/dev/dev.js'

let isRunning = false

export default async function runCypress() {
  runDev({
    onReady: async () => {
      if (!isRunning) {
        isRunning = true
        console.log('Running tests...')
        // https://docs.cypress.io/guides/guides/module-api#cypress-run
        const result = await cypress.run({
          config: await getCypressConfig(),
        })

        if (result.status === 'failed') throw new Error(result.message)
      }
    },
  })
}
