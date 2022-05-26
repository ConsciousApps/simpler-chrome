// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import todoSelect from '+/schema/todo/select'

const ApisResolversTodoGetMany = async ({ where, select, take = 100 }) => {
	const file = 'ApisResolversTodoGetMany'

	if (!where) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const todoFindMany = await prisma.todo.findMany({
			where: {
				AND: [where, { isDeleted: false }]
			},
			orderBy: [{ sortOrder: 'asc' }],
			take,
			select: select || todoSelect
		})

		return { data: todoFindMany }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversTodoGetMany
