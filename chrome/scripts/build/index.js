// Packages
const selectEnvOrDb = require('../utils/selectEnvOrDb.js')
const setUser = require('../utils/setUser.js')
const shellExec = require('../utils/shellExec.js')

const ScriptBuild = async () => {
	await setUser()

	const { env } = await selectEnvOrDb()

	shellExec(`doppler setup --config ${env}`)

	shellExec(`doppler run -- prisma generate --schema=./prisma/${env}/schema.prisma`)

	shellExec(`doppler run -- next build`)
}

ScriptBuild()
