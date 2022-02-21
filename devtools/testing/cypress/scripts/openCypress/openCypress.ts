import cypress from 'cypress'

import getCypressConfig from '../../cypress.config.js'

export default async function openCypress() {
  // https://docs.cypress.io/guides/guides/module-api#cypress-open
  cypress.open({
    config: await getCypressConfig(),
  })
}
