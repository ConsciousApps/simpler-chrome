// Packages
import { useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'
// Hooks
import useGetTodoUpsertData from '=/design/layouts/todos/getUpsertData'
// Functions
import fetchApi from '#/fetch'

const HooksDesignLayoutsTodoQuickSave = ({ quickAdd, setQuickAdd }) => {

	const { todoIsDraft } = useTodoCtx()

	const { data: upsertData } = useGetTodoUpsertData()

	useEffect(() => {
		if (quickAdd && !todoIsDraft) {
			setQuickAdd(false)

			await fetchApi({
				path: `/api/todo/upsert`,
				data: upsertData
			})
		}
	}, [todoIsDraft])
}

export default HooksDesignLayoutsTodoQuickSave
