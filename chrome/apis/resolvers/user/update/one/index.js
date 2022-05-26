// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import userSelect from '+/schema/user/select'

const ApisResolversUserUpdateOne = async ({ where, data, select }) => {
	const file = 'ApisResolversUserUpdateOne'

	if (!where || !data) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		// An `update` (as opposed to an `updateMany`) cannot have a nested `where` but can update relations
		const userUpdate = await prisma.user.update({
			where,
			data,
			select: select || userSelect
		})

		return { data: userUpdate }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversUserUpdateOne
