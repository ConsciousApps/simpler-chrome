// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import todoSelect from '+/schema/todo/select'

const ApisResolversTodoGetOne = async ({ where, select }) => {
	const file = 'ApisResolversTodoGetOne'

	if (!where) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const todoFindFirst = await prisma.todo.findFirst({
			where: {
				AND: [where, { isDeleted: false }]
			},
			orderBy: [{ sortOrder: 'asc' }],
			select: select || todoSelect
		})

		return { data: todoFindFirst }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversTodoGetOne
