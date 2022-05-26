// Packages
import { useEffect } from 'react'
// Contexts
import { useLoadingCtx } from '-/loading'
import { useTodoCtx } from '-/todo'
// Hooks
import useGetTodoUpsertData from '=/design/layouts/todos/getUpsertData'
// Functions
import fetchApi from '#/fetch'

const HooksDesignLayoutsTodoQuickSave = ({ setQuickAdd, setQuickAddTodo }) => {
	const { setLoading } = useLoadingCtx()

	const { todoIsDraft, setTodoIsDraft } = useTodoCtx()

	const { data: upsertData } = useGetTodoUpsertData()

	useEffect(() => {
		if (!todoIsDraft) {
			;(async () => {
				setLoading(true)

				const { data: apiTodoUpsert } = await fetchApi({
					path: `${process.env.NEXT_PUBLIC_APP_URL}/api/todo/upsert`,
					data: upsertData
				})

				if (apiTodoUpsert) {
					setTodoIsDraft(true)

					setQuickAdd(false)

					setQuickAddTodo(apiTodoUpsert?.name)

					setLoading(false)
				}
			})()
		}
	}, [todoIsDraft])
}

export default HooksDesignLayoutsTodoQuickSave
