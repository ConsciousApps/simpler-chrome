// Resolvers
import prismaTodoCreate from '+/resolvers/todo/create'
import prismaTodoGetOne from '+/resolvers/todo/get/one'
import prismaTodoUpdateOne from '+/resolvers/todo/update/one'
// Utilities
import utilErrorHandler from '+/utils/error/handler'

const ApisResolversTodoUpsert = async ({ where, create, update, select }) => {
	const file = 'ApisResolversTodoUpsert'

	if (!where || (!create && !update)) return utilErrorHandler({ code: 'insufficient_args', file })

	const { data: todoGetOne, error: todoGetOneErr } = await prismaTodoGetOne({
		where,
		select
	})

	if (todoGetOneErr) return utilErrorHandler({ code: todoGetOneErr, file })

	if (todoGetOne) {
		if (!update) return { data: todoGetOne }

		return await prismaTodoUpdateOne({ where, data: update, select })
	}

	return await prismaTodoCreate({ data: create, select })
}

export default ApisResolversTodoUpsert
