// Resolvers
import prismaUserGetOne from '+/resolvers/user/get/one'
// Utilities
import utilAuthVerify from '+/utils/auth/verify'
import utilErrorHandler from '+/utils/error/handler'

const PagesApiUserGet = async (req, res) => {
	const file = 'PagesApiUserGet'

	const { data: authVerify, error: authVerifyErr } = await utilAuthVerify(req)
	if (!authVerify || authVerifyErr) return utilErrorHandler({ code: 'not_signed_in', file, res })

	const { data: userGetOne } = await prismaUserGetOne({
		where: { email: authVerify.email }
	})

	return res.json({ data: userGetOne })
}

export default PagesApiUserGet
