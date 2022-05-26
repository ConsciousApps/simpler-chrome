// Utilities
const colors = require('./colors.js')
const shellExec = require('./shellExec.js')

const ScriptUtilsPrismaGenerate = async env => {
	console.info(
		`\n${colors.green}Generating ${colors.cyan}✨ Prisma Client${colors.green} for the ${colors.yellow}${env}${colors.green} environment...${colors.end}\n`
	)

	// This assumes `setUser` script was already run in parent script that called this utility
	await shellExec(
		`prisma generate --schema=./prisma/${env.includes('dev') ? 'dev' : env}/schema.prisma`
	)

	console.info(
		`\n✨ ${colors.cyan}Prisma Client${colors.green} has been generated for the ${colors.yellow}${env}${colors.green} environment.${colors.end}\n`
	)
}

module.exports = ScriptUtilsPrismaGenerate
