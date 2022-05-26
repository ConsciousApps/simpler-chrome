// Packages
import { Magic } from '@magic-sdk/admin'

const ApisUtilsAuthSignout = async req => {
	const magic = new Magic(process.env.MAGIC_SECRET)

	const token = req?.headers?.authorization
		? req.headers.authorization.replace('Bearer ', '')
		: null

	if (!token) return { error: 'missing_token' }

	try {
		const signedOut = await magic.users.logoutByToken(token)

		return { data: signedOut }
	} catch (err) {
		console.error(err)

		return { error: err.message }
	}
}

export default ApisUtilsAuthSignout
