// Resolvers
import prismaCategoryGetOne from '+/resolvers/category/get/one'
import prismaCategoryGetMany from '+/resolvers/category/get/many'
import prismaCircleCount from '+/resolvers/circle/count'
// Utilities
import utilAuthVerify from '+/utils/auth/verify'
import utilErrorHandler from '+/utils/error/handler'

const PagesApiCategoryGet = async (req, res) => {
	const file = 'PagesApiCategoryGet'

	const { data: authVerify, error: authVerifyErr } = await utilAuthVerify(req)
	if (!authVerify || authVerifyErr) return utilErrorHandler({ code: 'not_signed_in', file, res })

	const {
		// --- PUBLIC ID ---
		id,
		// --- RELATIONS ---
		Circle,
		// --- FIELDS ---
		isArchived,
		isDraft,
		isTutorial
	} = req.body

	const isOwner = Circle
		? [
				{
					Circle: {
						AND: [
							{ circleId: Circle },
							{
								OR: [
									{ UserAdmins: { some: { userId: authVerify.userId } } },
									{ UserMembers: { some: { userId: authVerify.userId } } }
								]
							}
						]
					}
				}
		  ]
		: [{ Circle: { isNot: { circleId: undefined } } }, { User: { email: authVerify.email } }]

	const { data: isCircleAdminOrMember } = Circle
		? await prismaCircleCount({ where: isOwner[0]?.Circle })
		: { data: false }

	if (Circle && isCircleAdminOrMember === 0) return res.json({ data: [] })

	if (!id) {
		const { data: categoryGetMany } = await prismaCategoryGetMany({
			where: {
				AND: [
					// --- RELATIONS ---
					...isOwner,
					// --- FIELDS ---
					{ isArchived },
					{ isDraft },
					{ isTutorial: isTutorial === true } // If `isTutorial` is undefined, mark as `false`
				]
			},
			orderBy: [{ sortOrder: 'asc' }]
		})

		return res.json({ data: categoryGetMany })
	}

	// Get category by id
	const { data: categoryGetOne } = await prismaCategoryGetOne({
		where: {
			AND: [{ categoryId: id }, ...isOwner]
		}
	})

	if (!categoryGetOne) return utilErrorHandler({ code: 'no_records_found', file, res })

	return res.json({ data: categoryGetOne })
}

export default PagesApiCategoryGet
