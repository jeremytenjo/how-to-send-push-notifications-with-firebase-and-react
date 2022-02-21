const path = require('path')

const removeFolder = require('../../../../devtools/utils/node/removeFolder.cjs')

module.exports = async function removeBuildFolder({ rootPath }) {
  const buildDir = path.join(rootPath, 'build')
  await removeFolder(buildDir)
}
