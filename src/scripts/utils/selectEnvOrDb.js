// Packages
const inquirer = require('inquirer')
// Utilities
const colors = require('./colors.js')
const prismaGenerate = require('./prismaGenerate.js')
const shellExec = require('./shellExec.js')

const ScriptUtilsSelectEnvOrDb = async ({ isDev, type = 'env' } = { type: 'env' }) => {
	let currentEnv = ''

	if (type === 'env') {
		console.info(
			`\n${colors.green}The following environment is currently being used:${colors.yellow}\n`
		)

		// This assumes `setUser` script was already run in parent script that called this utility
		const dopplerEnv = await shellExec('doppler run -- printenv DOPPLER_CONFIG')

		console.info(colors.end)

		currentEnv = dopplerEnv.stdout.slice(0, -1)
	}

	let env

	if (!isDev) {
		const { keepEnv } = await inquirer.prompt([
			{
				type: 'confirm',
				name: 'keepEnv',
				message: `${colors.magenta}Keep this environment?${colors.end}`,
				default: true
			}
		])

		if (keepEnv) env = currentEnv
		else {
			const message = `Please select the ${[
				type === 'env' ? `${colors.yellow}environment${colors.end}` : null,
				type === 'db' ? `${colors.blue}database${colors.end}` : null,
				`${colors.yellow}environment${colors.end} and ${colors.blue}database${colors.end}`
			].find(x => x)} you’d like to use:`

			const { primary } = await inquirer.prompt([
				{
					type: 'list',
					name: 'primary',
					message,
					choices:
						type === 'env'
							? ['dev', 'prd']
							: // `main` database used in production
							  ['dev', 'main']
				}
			])

			env = primary
		}
	}
	// Dev environment
	else env = 'dev'

	if (currentEnv === env) {
		console.info(
			`\n${colors.green}The environment was left as-is:${colors.yellow}\n\n${currentEnv}\n${colors.end}`
		)
	}
	// New environment
	else {
		await prismaGenerate(env)

		shellExec(`doppler configure set enclave.config=${env}`)

		console.info(
			`\n${colors.green}The environment has been set to:\n\n${colors.yellow}${env}${colors.end}\n`
		)
	}

	const db = [
		// `main` database used in production
		env === 'prd' ? 'main' : null,
		env
	].find(x => x)

	console.info(
		`\n${colors.magenta}The following database branch will be used:${colors.blue}\n\n${db}\n${colors.end}`
	)

	return {
		env,
		db,
		schema: [env.includes('dev') ? 'dev' : null, env].find(x => x)
	}
}

module.exports = ScriptUtilsSelectEnvOrDb
