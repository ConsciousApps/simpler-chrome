// Resolvers
import prismaCategoryGetMany from '+/resolvers/category/get/many'
import prismaCircleCount from '+/resolvers/circle/count'
import prismaTodoGetOne from '+/resolvers/todo/get/one'
import prismaTodoGetMany from '+/resolvers/todo/get/many'
// Utilities
import utilAuthVerify from '+/utils/auth/verify'
import utilErrorHandler from '+/utils/error/handler'

const PagesApiTodoGet = async (req, res) => {
	const file = 'PagesApiTodoGet'

	const { data: authVerify, error: authVerifyErr } = await utilAuthVerify(req)
	if (!authVerify || authVerifyErr) return utilErrorHandler({ code: 'not_signed_in', file, res })

	const {
		// --- PUBLIC ID ---
		id,
		// --- RELATIONS ---
		Categories,
		Circle,
		// --- FIELDS ---
		isArchived,
		isDraft,
		isImportant,
		isTimeSensitive,
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

	// Get all to-dos for user by draft or done status
	if (!id) {
		const { data: todoGetMany } = await prismaTodoGetMany({
			where: {
				AND: [
					// --- RELATIONS ---
					...(Categories
						? [{ OR: Categories.map(x => ({ Categories: { some: { name: x } } })) }]
						: []),
					...isOwner,
					// --- FIELDS ---
					{ isArchived },
					{ isDraft },
					{ isImportant },
					{ isTimeSensitive },
					{ isTutorial: isTutorial === true } // If `isTutorial` is undefined, mark as `false`
				]
			},
			orderBy: [{ sortOrder: 'asc' }]
		})

		return res.json({ data: todoGetMany })
	}

	// Get to-do by id
	const { data: todoGetOne } = await prismaTodoGetOne({
		where: {
			AND: [{ todoId: id }, ...isOwner]
		}
	})

	if (!todoGetOne) return utilErrorHandler({ code: 'no_records_found', file, res })

	const { data: categoryGetMany } = await prismaCategoryGetMany({
		where: {
			AND: [...isOwner]
		}
	})

	return res.json({
		data: {
			...todoGetOne,
			Categories: categoryGetMany.map(category => ({
				label: category.name,
				color: category.color,
				value: todoGetOne.Categories.some(x => x.name === category.name)
			}))
		}
	})
}

export default PagesApiTodoGet
