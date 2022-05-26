// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
import utilGenerateId from '+/utils/schema/generateId'
// Schema
import activitySelect from '+/schema/activity/select'

const ApisResolversActivityCreate = async ({ data, select }) => {
	const file = 'ApisResolversActivityCreate'

	if (!data) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const activityCreate = await prisma.activity.create({
			data: {
				// --- PUBLIC ID ---
				activityId: utilGenerateId(),
				// --- FIELDS ---
				...data
			},
			select: select || activitySelect
		})

		return { data: activityCreate }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversActivityCreate
