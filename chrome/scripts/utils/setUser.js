// Packages
import shell from 'shelljs'
// Utils
import colors from './colors.js'
import exit from './exit.js'

/**
 * This script prepends a `sudo -u username` to every shelljs exec, since `shelljs` by default uses the `root` user rather than the actual username (e.g. `martinadams`); this causes permission errors later on. So we need to set the actual username each time we `shell.exec`
 */

const ScriptUtilsSetUser = async () => {
	const getUsername = await shell.exec(`who -q\n`)

	console.info()

	const username = getUsername.stdout.split(' ')[0]

	if (username === 'root') {
		shell.exec(`You’re logged in as 'root'.`)

		exit()
	}

	console.info(
		`${colors.green}You’re logged in as ${colors.magenta}${username}${colors.green}.${colors.end}`
	)

	shell.env['USERNAME'] = username
}

export default ScriptUtilsSetUser
