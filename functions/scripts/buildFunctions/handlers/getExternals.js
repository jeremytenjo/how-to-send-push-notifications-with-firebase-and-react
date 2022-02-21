/**
 * Gets externals from package.json peerDependencies
 */
module.exports = function getExternals({ packageJson }) {
  if (!packageJson.dependencies) return []

  const externals = Object.keys(packageJson.dependencies)
  return externals
}
