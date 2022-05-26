// Packages
import { useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoResetQuickAdd = ({
	allAnyOptions,
	andOrOptions,
	categoryOptions,
	dateStartPredecessors,
	durationOptions,
	isDependency,
	setAllAnyOptions,
	setAndOrOptions,
	setCategoryOptions,
	setDateStartPredecessors,
	setDurationOptions,
	setIsDependency
}) => {
	const {
		setTodoId,
		setTodoDateDue,
		setTodoDateStart,
		setTodoDurationEstimate,
		setTodoIsDraft,
		setTodoIsImportant,
		setTodoIsLive,
		setTodoIsTimeSensitive,
		setTodoName,
		setTodoNotes,
		todoId,
		todoDateDue,
		todoDateStart,
		todoDurationEstimate,
		todoIsDraft,
		todoIsImportant,
		todoIsLive,
		todoIsTimeSensitive,
		todoName,
		todoNotes
	} = useTodoCtx()

	useEffect(() => {
		if (todoId) setTodoId(null)

		if (todoName) setTodoName(null)

		if (todoDateStart) setTodoDateStart(null)

		if (todoDateDue) setTodoDateDue(null)

		if (!todoIsDraft) setTodoIsDraft(true)

		if (todoIsLive) setTodoIsLive(false)

		if (todoIsImportant) setTodoIsImportant(false)

		if (todoIsTimeSensitive) setTodoIsTimeSensitive(false)

		if (todoNotes) setTodoNotes(null)

		if (todoDurationEstimate) setTodoDurationEstimate(null)

		if (allAnyOptions?.find(x => x.value))
			setAllAnyOptions(prev => prev.map(x => ({ ...x, value: false })))

		if (andOrOptions?.find(x => x.value))
			setAndOrOptions(prev => prev.map(x => ({ ...x, value: false })))

		if (categoryOptions?.find(x => x.value))
			setCategoryOptions(prev => prev.map(x => ({ ...x, value: false })))

		if (dateStartPredecessors?.find(x => x.value))
			setDateStartPredecessors(prev => prev.map(x => ({ ...x, value: false })))

		if (durationOptions?.find(x => x.value))
			setDurationOptions(prev => prev.map(x => ({ ...x, value: false })))

		if (isDependency) setIsDependency(false)
	}, [])
}

export default HooksDesignLayoutsTodoResetQuickAdd
