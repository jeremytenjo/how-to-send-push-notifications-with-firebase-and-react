// https://github.com/enquirer/enquirer
const { MultiSelect } = require('enquirer')

const shell = require('../../../devtools/utils/node/shell.cjs')
const buildFunctions = require('../buildFunctions/buildFunctions')

module.exports = async function deployFunctions() {
  try {
    await buildFunctions()

    const funs = require('../../build/index')
    const cloudFunctions = Object.keys(funs) || []

    if (!cloudFunctions.length) return console.log('No functions available to deploy')

    const prompt = new MultiSelect({
      name: 'selectedFunctionToDeploy',
      message: 'Which functions do you want to deploy?',
      choices: cloudFunctions,
    })

    const answers = await prompt.run()

    if (!answers.length) return

    const answersString = `functions:${answers.join(',functions:')}`
    const command = `firebase deploy --only ${answersString}`

    shell(command)
  } catch (error) {
    throw new Error(error)
  }
}
