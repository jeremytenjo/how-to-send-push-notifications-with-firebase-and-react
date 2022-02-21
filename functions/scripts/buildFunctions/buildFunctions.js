const path = require('path')

const esbuild = require('esbuild')

const getCommandLineArgs = require('./handlers/getCommandLineArgs.js')
const removeBuildFolder = require('./handlers/removeBuildFolder.js')
const getExternals = require('./handlers/getExternals.js')

module.exports = async function buildFunctions() {
  const args = getCommandLineArgs()
  const rootPath = path.join(process.cwd(), 'functions')
  const entryPoint = path.join(rootPath, 'src', 'functions.js')
  const outfile = path.join(rootPath, 'build', 'index.js')
  const packageJson = require(path.join(rootPath, 'package.json'))

  await removeBuildFolder({ rootPath })
  const external = getExternals({ packageJson })

  // https://esbuild.github.io/api/#simple-options
  await esbuild.build({
    entryPoints: [entryPoint],
    outfile,
    bundle: true,
    minify: true,
    format: 'cjs',
    target: 'es2017',
    watch: args.watch,
    external,
  })
}
