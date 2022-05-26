// Utilities
const colors = require('./colors.js')

const ScriptUtilExit = () => {
	console.info(`\n${colors.green}Exiting process... ✨${colors.end}\n`)

	process.exit(0)
}

module.exports = ScriptUtilExit
