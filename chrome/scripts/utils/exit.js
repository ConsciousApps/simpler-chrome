// Utilities
import colors from './colors.js'

const ScriptUtilExit = () => {
	console.info(`\n${colors.green}Exiting process... ✨${colors.end}\n`)

	process.exit(0)
}

export default ScriptUtilExit
