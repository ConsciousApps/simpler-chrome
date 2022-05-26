// Resolvers
import prismaActivityCreate from '+/resolvers/activity/create'
import prismaCategoryGetOne from '+/resolvers/category/get/one'
import prismaCircleCount from '+/resolvers/circle/count'
import prismaTodoGetOne from '+/resolvers/todo/get/one'
import prismaTodoUpsert from '+/resolvers/todo/upsert'
// Utilities
import utilAuthVerify from '+/utils/auth/verify'
import utilErrorHandler from '+/utils/error/handler'

const PagesApiTodoUpsert = async (req, res) => {
	const file = 'PagesApiTodoUpsert'

	const { data: authVerify, error: authVerifyErr } = await utilAuthVerify(req)
	if (!authVerify || authVerifyErr) return utilErrorHandler({ code: 'not_signed_in', file, res })

	const {
		// --- SYSTEM ---
		timezone,
		// --- PUBLIC ID ---
		todoId,
		// --- RELATIONS ---
		Categories,
		Circle,
		// --- FIELDS ---
		dateDue,
		dateDueType,
		dateDueTimezone,
		dateStart,
		dateStartPredecessors,
		dateStartPredecessorsAllAny,
		dateStartPredecessorsAndOr,
		dateStartTimezone,
		durationEstimate,
		isArchived,
		isDraft,
		isImportant,
		isTimeSensitive,
		isTutorial,
		name,
		notes
	} = req.body

	if (!todoId && !name) return utilErrorHandler({ code: 'insufficient_args', file, res })

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

	const whereTodo = {
		AND: [{ todoId: todoId || undefined }, ...(todoId ? isOwner : [])]
	}

	const { data: todoGetOne } = await prismaTodoGetOne({
		where: whereTodo,
		select: { todoId: true, isDraft: true, isNew: true }
	})

	if ((todoId && !todoGetOne) || (Circle && isCircleAdminOrMember === 0))
		return utilErrorHandler({ code: 'unauthorized', file, res })

	let getCategories = []

	if (Categories?.length) {
		for await (const category of Categories) {
			const { data: categoryGetOne } = await prismaCategoryGetOne({
				where: {
					AND: [{ name: category.name }, ...isOwner]
				},
				select: { categoryId: true }
			})

			getCategories.push(categoryGetOne)
		}
	}

	let upsert = {
		// --- RELATIONS ---
		...(getCategories?.length
			? {
					Categories: todoId
						? // On update
						  { set: getCategories.map(x => ({ categoryId: x.categoryId })) }
						: // On create
						  { connect: getCategories.map(x => ({ categoryId: x.categoryId })) }
			  }
			: {}),
		// --- FIELDS ---
		dateDue,
		dateDueTimezone,
		dateDueType: dateDueType || undefined,
		dateStart,
		...(dateStartPredecessors?.length
			? {
					dateStartPredecessors: todoId
						? { set: dateStartPredecessors.map(x => ({ todoId: x.todoId })) }
						: { connect: dateStartPredecessors.map(x => ({ todoId: x.todoId })) }
			  }
			: {}),
		dateStartPredecessorsAllAny,
		dateStartPredecessorsAndOr,
		dateStartTimezone,
		durationEstimate,
		isArchived,
		isDraft,
		isImportant,
		// Switching from draft to published for the first time
		...(isDraft === false ? { isNew: false } : {}),
		isTimeSensitive,
		isTutorial,
		name,
		notes
	}

	const { data: todoUpsert } = await prismaTodoUpsert({
		where: { todoId: todoId || '' },
		create: {
			// --- RELATIONS ---
			...(Circle ? { Circle: { connect: { circleId: Circle } } } : {}),
			User: { connect: { email: authVerify.email } },
			// --- FIELDS ---
			...upsert
		},
		update: {
			// --- PUBLIC ID ---
			todoId: todoId || undefined,
			// --- FIELDS ---
			...upsert
		}
	})

	// To-do created or updated
	if (todoGetOne?.isDraft && isDraft === false && !isTutorial)
		await prismaActivityCreate({
			data: {
				// --- SYSTEM ---
				timezone,
				// --- RELATIONS ---
				...(Circle ? { Circle: { connect: { circleId: Circle } } } : {}),
				Todo: { connect: { todoId: todoGetOne.todoId } },
				User: { connect: { email: authVerify.email } },
				// --- FIELDS ---
				model: 'Todo',
				type: todoGetOne?.isNew ? 'create' : 'update'
			}
		})

	return res.json({ data: todoUpsert })
}

export default PagesApiTodoUpsert
