// Packages
import { useState, useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoLoadDateStartDependencies = ({
	setAllAnyOptions,
	setAndOrOptions,
	setDateStartPredecessors
}) => {
	const {
		todoDateStartPredecessors,
		todoDateStartPredecessorsAllAny,
		todoDateStartPredecessorsAndOr
	} = useTodoCtx()

	const [hasLoaded, setHasLoaded] = useState(false)

	useEffect(() => {
		if (!hasLoaded) {
			if (
				todoDateStartPredecessors?.length &&
				todoDateStartPredecessorsAllAny &&
				todoDateStartPredecessorsAndOr
			) {
				setDateStartPredecessors(prev => [
					...prev.filter(x => !todoDateStartPredecessors.some(y => y.todoId === x.todoId)),
					...(prev.find(x => todoDateStartPredecessors.some(y => y.todoId === x.todoId))
						? prev
								.filter(x => todoDateStartPredecessors.some(y => y.todoId === x.todoId))
								.map(x => ({ ...x, value: true }))
						: [])
				])

				setAllAnyOptions(prev => [
					...prev.filter(x => x.id !== todoDateStartPredecessorsAllAny),
					...(prev.find(x => x.id === todoDateStartPredecessorsAllAny)
						? [{ ...prev.find(x => x.id === todoDateStartPredecessorsAllAny), value: true }]
						: [])
				])

				setAndOrOptions(prev => [
					...prev.filter(x => x.id !== todoDateStartPredecessorsAndOr),
					...(prev.find(x => x.id === todoDateStartPredecessorsAndOr)
						? [{ ...prev.find(x => x.id === todoDateStartPredecessorsAndOr), value: true }]
						: [])
				])
			}

			setHasLoaded(true)
		}
	}, [todoDateStartPredecessors, todoDateStartPredecessorsAllAny, todoDateStartPredecessorsAndOr])

	return { data: hasLoaded }
}

export default HooksDesignLayoutsTodoLoadDateStartDependencies
