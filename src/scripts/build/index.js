// Packages
const shell = require('shelljs')

// This is run on Vercel
const ScriptBuild = async () => {
	shell.exec(
		`(curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh`
	)

	// Set environment from branch (!) that’s being deployed to Vercel; this is a workaround since Vercel only has two environments that can be deployed: `preview`, and `production`; and we want to use more than those two
	const gitBranch = process.env.VERCEL_GIT_COMMIT_REF || ''

	const env = gitBranch === 'main' ? 'prd' : 'dev'

	// When we deploy the `dev` branch or `feature` branches to Vercel, Doppler will connect to the root `dev` environment and database
	shell.exec(`doppler setup --token ${process.env.DOPPLER_TOKEN} --config ${env}`)

	shell.exec(`doppler run -- prisma generate --schema=./prisma/${env}/schema.prisma`)

	shell.exec(`doppler run -- next build`)
}

ScriptBuild()
