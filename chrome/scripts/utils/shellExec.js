// Packages
import shell from 'shelljs'
// Utils
import exit from './exit.js'

/**
 * This script prepends a `sudo -u username` to every shelljs exec, since `shelljs` by default uses the `root` user rather than the actual username (e.g. `martinadams`); this causes permission errors later on. So we need to set the actual username each time we `shell.exec`
 */

const ScriptUtilsExec = async script => {
	if (!shell.env.USERNAME) {
		await shell.exec('echo "Your username has not been set."')

		exit()
	}

	return await shell.exec(`sudo -u ${shell.env.USERNAME} ${script}`)
}

export default ScriptUtilsExec
