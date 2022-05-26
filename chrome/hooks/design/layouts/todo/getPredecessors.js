// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Contexts
import { useCircleCtx } from '-/circle'
// Functions
import fetchApi from '#/fetch'

const HooksDesignLayoutsTodoGetPredecessors = ({ setDateStartPredecessors, toggle }) => {
	const router = useRouter()

	const { circleSelected } = useCircleCtx()

	useEffect(() => {
		;(async () => {
			if (router.query) {
				const { data: apiTodoGet } = await fetchApi({
					path: `${process.env.NEXT_PUBLIC_APP_URL}/api/todo/get`,
					data: {
						// --- RELATIONS ---
						Circle: circleSelected?.circleId,
						// --- FIELDS ---
						isArchived: false,
						isDraft: false
					}
				})

				if (apiTodoGet)
					setDateStartPredecessors(
						apiTodoGet
							.filter(x => (router.query.id ? x.todoId !== router.query.id : x))
							.map(x => ({ id: x.todoId, todoId: x.todoId, label: x.name, value: false }))
					)
			}
		})()
	}, [circleSelected?.circleId, router.query, toggle])
}

export default HooksDesignLayoutsTodoGetPredecessors
