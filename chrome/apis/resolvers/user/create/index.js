// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
import utilGenerateId from '+/utils/schema/generateId'
// Schema
import userSelect from '+/schema/user/select'

const ApisResolversUserCreate = async ({ data, select }) => {
	const file = 'ApisResolversUserCreate'

	if (!data) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const userCreate = await prisma.user.create({
			data: {
				// --- PUBLIC ID ---
				userId: utilGenerateId(),
				// --- FIELDS ---
				...data
			},
			select: select || userSelect
		})

		return { data: userCreate }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversUserCreate
