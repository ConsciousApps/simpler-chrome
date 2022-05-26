// Utilities
const ps = require('../utils/planetScale.js')
const selectEnvOrDb = require('../utils/selectEnvOrDb.js')
const setUser = require('../utils/setUser.js')
const shellExec = require('../utils/shellExec.js')

const ScriptNext = async () => {
	await setUser()

	const { db } = await selectEnvOrDb()

	shellExec(ps({ branch: db, execute: 'doppler run -- next start' }))
}

ScriptNext()
