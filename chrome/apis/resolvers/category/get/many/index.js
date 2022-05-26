// Utilities
import prisma from '+/utils/prisma'
import utilErrorHandler from '+/utils/error/handler'
// Schema
import categorySelect from '+/schema/category/select'

const ApisResolversCategoryGetMany = async ({ where, select, take = 100 }) => {
	const file = 'ApisResolversCategoryGetMany'

	if (!where) return utilErrorHandler({ code: 'insufficient_args', file })

	try {
		const categoryFindMany = await prisma.category.findMany({
			where: {
				AND: [where, { isDeleted: false }]
			},
			orderBy: [{ sortOrder: 'asc' }],
			take,
			select: select || categorySelect
		})

		return { data: categoryFindMany }
	} catch (err) {
		return utilErrorHandler({ code: err, file })
	}
}

export default ApisResolversCategoryGetMany
