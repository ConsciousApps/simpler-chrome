// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import userSelect from '+/schema/user/select'

const ApisResolversUserGetOne = async ({ where, select }) => {
	const file = 'ApisResolversUserGetOne'

	if (!where) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const userFindFirst = await prisma.user.findFirst({
			where,
			orderBy: [{ createdAt: 'asc' }],
			select: select || userSelect
		})

		return { data: userFindFirst }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversUserGetOne
