// Packages
import { Magic } from '@magic-sdk/admin'
// Resolvers
import prismaUserGetOne from '+/resolvers/user/get/one'

const ApisUtilsAuthVerify = async req => {
	const token = req?.headers?.authorization
		? req.headers.authorization.replace('Bearer ', '')
		: null

	if (!token) return { error: 'missing_token' }

	try {
		const magic = new Magic(process.env.MAGIC_SECRET)

		await magic.token.validate(token)

		const metadata = await magic.users.getMetadataByToken(token)

		if (!metadata) return { error: 'invalid_token' }

		const { data: userGet } = await prismaUserGetOne({
			where: { email: metadata?.email }
		})

		return { data: userGet || { email: metadata.email } }
	} catch (err) {
		console.error(err)

		return { error: err.message }
	}
}

export default ApisUtilsAuthVerify
