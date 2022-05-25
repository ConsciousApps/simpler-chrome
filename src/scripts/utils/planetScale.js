const ScriptsUtilsPlanetScale = ({ branch, execute }) =>
	// PlanetScale dev DBs have the following format for developer sub databases: `dev-001` while our environments (dictated by Doppler) have this format: `dev_001`
	`pscale connect lifeproductivityapp ${
		branch.replace('_', '-') || branch
	} --execute-protocol 'mysql' --execute-env-url 'APP_DB' --execute '${execute}'`

module.exports = ScriptsUtilsPlanetScale
