// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import todoSelect from '+/schema/todo/select'

const ApisResolversTodoUpdateOne = async ({ where, data, select }) => {
	const file = 'ApisResolversTodoUpdateOne'

	if (!where || !data) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		// An `update` (as opposed to an `updateMany`) cannot have a nested `where` but can update relations
		const todoUpdate = await prisma.todo.update({
			where,
			data,
			select: select || todoSelect
		})

		return { data: todoUpdate }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversTodoUpdateOne
