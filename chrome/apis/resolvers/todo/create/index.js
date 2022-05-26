// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
import utilGenerateId from '+/utils/schema/generateId'
// Schema
import todoSelect from '+/schema/todo/select'

const ApisResolversTodoCreate = async ({ data, select }) => {
	const file = 'ApisResolversTodoCreate'

	if (!data) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const todoCreate = await prisma.todo.create({
			data: {
				// --- PUBLIC ID ---
				todoId: utilGenerateId(),
				// --- FIELDS ---
				...data
			},
			select: select || todoSelect
		})

		return { data: todoCreate }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversTodoCreate
