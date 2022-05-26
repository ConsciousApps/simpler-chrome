// Packages
import Userlist from '@userlist/push'
// Resolvers
import prismaUserCreate from '+/resolvers/user/create'
import prismaUserGetOne from '+/resolvers/user/get/one'
import prismaUserUpdateOne from '+/resolvers/user/update/one'
// Utilities
import utilAuthVerify from '+/utils/auth/verify'
import utilErrorHandler from '+/utils/error/handler'

const PagesApiAuthSignin = async (req, res) => {
	const file = 'PagesApiAuthSignin'

	const { data: authVerify, error: authVerifyErr } = await utilAuthVerify(req)
	if (!authVerify || authVerifyErr) return utilErrorHandler({ code: 'not_signed_in', file, res })

	const { authProvider, authUsername, nameFirst, nameLast, profile } = req.body

	const { data: userGetOne } = await prismaUserGetOne({ where: { email: authVerify.email } })

	const createOrUpdateData = {
		authProvider,
		authUsername,
		email: authVerify.email,
		// Retain any previously used information
		nameFirst: userGetOne?.nameFirst || nameFirst,
		nameLast: userGetOne?.nameLast || nameLast,
		profile: userGetOne?.profile || profile
	}

	const { data: userUpsert } = !userGetOne
		? await prismaUserCreate({ data: createOrUpdateData })
		: await prismaUserUpdateOne({
				where: { email: authVerify.email },
				data: createOrUpdateData
		  })

	if (!userGetOne) {
		const userlist = new Userlist({ pushKey: process.env.USERLIST })

		await userlist.users.create({
			identifier: userUpsert.email,
			email: userUpsert.email,
			properties: {
				first_name: userUpsert.nameFirst,
				last_name: userUpsert.nameLast
			},
			relationships: [
				{
					company: process.env.NEXT_PUBLIC_APP_NAME,
					properties: {
						paid: userUpsert.paid,
						paidTier: userUpsert.paidTier,
						version: process.env.NEXT_PUBLIC_APP_VERSION
					}
				}
			]
		})
	}

	return res.json({ data: { ...userUpsert, isNew: !userGetOne } })
}

export default PagesApiAuthSignin
