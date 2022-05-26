// Packages
import { useState, useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoIsQuickAddError = () => {
	const { todoDateDue, todoDateStart } = useTodoCtx()

	const [isError, setIsError] = useState(false)

	useEffect(() => {
		if (todoDateStart && todoDateDue && todoDateStart?.getTime() >= todoDateDue?.getTime())
			setIsError(true)
		else if (isError) setIsError(false)
	}, [todoDateDue, todoDateStart])

	return { data: isError }
}

export default HooksDesignLayoutsTodoIsQuickAddError
