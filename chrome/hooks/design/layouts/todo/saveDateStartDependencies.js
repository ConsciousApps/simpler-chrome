// Packages
import { useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoSaveDateStartDependencies = ({
	allAnyOptions,
	andOrOptions,
	dateStartPredecessors,
	hasLoaded
}) => {
	const {
		setTodoDateStartPredecessors,
		setTodoDateStartPredecessorsAllAny,
		setTodoDateStartPredecessorsAndOr
	} = useTodoCtx()

	useEffect(() => {
		if (hasLoaded) {
			setTodoDateStartPredecessors(
				dateStartPredecessors.find(x => x.value)
					? dateStartPredecessors
							.filter(x => x.value)
							?.map(x => ({ todoId: x.todoId, name: x.label }))
					: []
			)

			setTodoDateStartPredecessorsAllAny(allAnyOptions.find(x => x.value)?.id || null)

			setTodoDateStartPredecessorsAndOr(andOrOptions.find(x => x.value)?.id || null)
		}
	}, [allAnyOptions, andOrOptions, dateStartPredecessors])
}

export default HooksDesignLayoutsTodoSaveDateStartDependencies
