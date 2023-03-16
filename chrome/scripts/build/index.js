// Packages
import selectEnvOrDb from '../utils/selectEnvOrDb.js'
import setUser from '../utils/setUser.js'
import shellExec from '../utils/shellExec.js'

const ScriptBuild = async () => {
	await setUser()

	const { env } = await selectEnvOrDb()

	shellExec(`doppler setup --config ${env}`)

	shellExec(`doppler run -- next build`)
}

ScriptBuild()
