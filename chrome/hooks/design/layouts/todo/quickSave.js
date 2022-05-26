// Packages
import { useEffect } from 'react'
// Contexts
import { useLoadingCtx } from '-/loading'
import { useTodoCtx } from '-/todo'
// Hooks
import useGetTodoUpsertData from '=/design/layouts/todos/getUpsertData'
// Functions
import fetchApi from '#/fetch'

const HooksDesignLayoutsTodoQuickSave = ({ quickAdd, setQuickAdd, setQuickAddTodo }) => {
	const { setLoading } = useLoadingCtx()

	const { todoIsDraft } = useTodoCtx()

	const { data: upsertData } = useGetTodoUpsertData()

	useEffect(() => {
		if (quickAdd && !todoIsDraft) {
			;(async () => {
				setLoading(true)

				const { data: apiTodoUpsert } = await fetchApi({
					path: `/api/todo/upsert`,
					data: upsertData
				})

				console.log(apiTodoUpsert)

				if (apiTodoUpsert) {
					setQuickAdd(false)

					setQuickAddTodo(apiTodoUpsert?.name)

					setLoading(false)
				}
			})()
		}
	}, [todoIsDraft])
}

export default HooksDesignLayoutsTodoQuickSave
