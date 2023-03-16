// Utilities
import ps from '../utils/planetScale.js'
import selectEnvOrDb from '../utils/selectEnvOrDb.js'
import setUser from '../utils/setUser.js'
import shellExec from '../utils/shellExec.js'

const ScriptNext = async () => {
	await setUser()

	const { db } = await selectEnvOrDb()

	shellExec(ps({ branch: db, execute: 'doppler run -- next dev' }))
}

ScriptNext()
