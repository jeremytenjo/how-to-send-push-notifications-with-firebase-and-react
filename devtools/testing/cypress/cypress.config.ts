import getAppConfig from '../../../app.config.js'

export default async function getCypressConfig() {
  const appConfig = await getAppConfig()
  const cypressFolderPath = 'devtools/testing/cypress'
  // https://docs.cypress.io/guides/references/configuration#Options
  const cypressConfig: Cypress.ConfigOptions = {
    baseUrl: `http://localhost:${appConfig.server.local.port}`,
    supportFile: false,
    pluginsFile: false,
    testFiles: '**/*cy.js',
    video: false,
    integrationFolder: 'src',
    downloadsFolder: `${cypressFolderPath}/downloads`,
    fixturesFolder: `${cypressFolderPath}/fixtures`,
    screenshotsFolder: `${cypressFolderPath}/screenshots`,
    videosFolder: `${cypressFolderPath}/videos`,
    projectId: 'hy2gou',
  }

  return cypressConfig
}
