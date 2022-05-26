// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'

const ApisResolversCircleCount = async ({ where }) => {
	const file = 'ApisResolversCircleCount'

	if (!where) return { error: utilErrorHandler({ code: 'insufficient_args', file }) }

	try {
		const circleCount = await prisma.circle.count({ where })

		return { data: circleCount }
	} catch (err) {
		return { error: utilErrorHandler({ code: err, file }) }
	}
}

export default ApisResolversCircleCount
