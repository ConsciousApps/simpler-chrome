// Packages
import { useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoSetDateDueType = ({ dateDueTypeOptions }) => {
	const { setTodoDateDueType } = useTodoCtx()

	useEffect(() => {
		if (dateDueTypeOptions?.find(x => x.selected))
			setTodoDateDueType(dateDueTypeOptions?.find(x => x.selected).id)
	}, [dateDueTypeOptions])
}

export default HooksDesignLayoutsTodoSetDateDueType
