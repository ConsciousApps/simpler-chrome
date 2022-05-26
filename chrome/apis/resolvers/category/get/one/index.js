// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import categorySelect from '+/schema/category/select'

const ApisResolversCategoryGetOne = async ({ where, select }) => {
	const file = 'ApisResolversCategoryGetOne'

	if (!where) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const categoryFindFirst = await prisma.category.findFirst({
			where: {
				AND: [where, { isDeleted: false }]
			},
			orderBy: [{ sortOrder: 'asc' }],
			select: select || categorySelect
		})

		return { data: categoryFindFirst }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversCategoryGetOne
