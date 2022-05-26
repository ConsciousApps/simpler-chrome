// Packages
import { useState, useMemo } from 'react'
// Contexts
import { useCircleCtx } from '-/circle'
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodosGetTodoData = () => {
	const { circleSelected } = useCircleCtx()

	const {
		// --- PUBLIC ID ---
		todoId,
		// --- RELATIONS ---
		todoCategories,
		// --- FIELDS ---
		todoDateDue,
		todoDateDueTimezone,
		todoDateDueType,
		todoDateStart,
		todoDateStartPredecessors,
		todoDateStartPredecessorsAllAny,
		todoDateStartPredecessorsAndOr,
		todoDateStartTimezone,
		todoDurationEstimate,
		todoIsDraft,
		todoIsImportant,
		todoIsTimeSensitive,
		todoName,
		todoNotes
	} = useTodoCtx()

	const [data, setData] = useState(null)

	const getBool = bool => (bool === true || bool === false ? bool : undefined)

	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

	useMemo(
		() =>
			setData({
				// --- PUBLIC ID ---
				todoId,
				// --- RELATIONS ---
				Categories: todoCategories
					?.filter(x => x.value)
					?.map(x => ({ color: x.color, name: x.label })),
				Circle: circleSelected?.circleId,
				// --- FIELDS ---
				dateDue: todoDateDue,
				dateDueTimezone: todoDateDue ? todoDateDueTimezone || timezone : null,
				dateDueType: todoDateDueType,
				dateStart: todoDateStart,
				dateStartPredecessors: todoDateStartPredecessors,
				dateStartPredecessorsAllAny: todoDateStartPredecessorsAllAny,
				dateStartPredecessorsAndOr: todoDateStartPredecessorsAndOr,
				dateStartTimezone: todoDateStart ? todoDateStartTimezone || timezone : null,
				durationEstimate: todoDurationEstimate,
				isDraft: getBool(todoIsDraft),
				isImportant: getBool(todoIsImportant),
				isTimeSensitive: getBool(todoIsTimeSensitive),
				name: todoName,
				notes: todoNotes
			}),
		[
			// --- PUBLIC ID ---
			todoId,
			// --- RELATIONS ---
			todoCategories,
			circleSelected?.circleId,
			// --- FIELDS ---
			todoDateDue,
			todoDateDueTimezone,
			todoDateDueType,
			todoDateStart,
			todoDateStartPredecessors,
			todoDateStartPredecessorsAllAny,
			todoDateStartPredecessorsAndOr,
			todoDateStartTimezone,
			todoDurationEstimate,
			todoIsDraft,
			todoIsImportant,
			todoIsTimeSensitive,
			todoName,
			todoNotes
		]
	)

	return { data }
}

export default HooksDesignLayoutsTodosGetTodoData
