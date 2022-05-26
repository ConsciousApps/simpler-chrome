// Packages
const shell = require('shelljs')

const ScriptBuild = async () => {
	const env = 'dev'

	shell.exec(`doppler setup --config ${env}`)

	shell.exec(`doppler run -- prisma generate --schema=./prisma/${env}/schema.prisma`)

	shell.exec(`doppler run -- next build`)
}

ScriptBuild()
