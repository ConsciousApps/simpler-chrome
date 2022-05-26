// Packages
import { createContext, useState, useContext } from 'react'

const Context = createContext(null)

export const TodoProvider = ({ children }) => {
	// --- PUBLIC ID ---
	const [todoId, setTodoId] = useState(null)
	// --- RELATIONS ---
	const [todoCategories, setTodoCategories] = useState([])
	// --- FIELDS ---
	const [todoDateDue, setTodoDateDue] = useState(null)
	const [todoDateDueTimezone, setTodoDateDueTimezone] = useState(null)
	const [todoDateDueType, setTodoDateDueType] = useState(false)
	const [todoDateStart, setTodoDateStart] = useState(null)
	const [todoDateStartPredecessors, setTodoDateStartPredecessors] = useState([])
	const [todoDateStartPredecessorsAllAny, setTodoDateStartPredecessorsAllAny] = useState(null)
	const [todoDateStartPredecessorsAndOr, setTodoDateStartPredecessorsAndOr] = useState(null)
	const [todoDateStartSuccessors, setTodoDateStartSuccessors] = useState(null)
	const [todoDateStartTimezone, setTodoDateStartTimezone] = useState(null)
	const [todoDurationEstimate, setTodoDurationEstimate] = useState(null)
	const [todoIsDraft, setTodoIsDraft] = useState(true)
	const [todoIsImportant, setTodoIsImportant] = useState(false)
	const [todoIsTimeSensitive, setTodoIsTimeSensitive] = useState(false)
	const [todoName, setTodoName] = useState(null)
	const [todoNotes, setTodoNotes] = useState(null)
	// --- OTHER ---
	const [todoIsLive, setTodoIsLive] = useState(false)
	const [todoSubmit, setTodoSubmit] = useState(false)

	return (
		<Context.Provider
			{...{
				value: {
					// getters
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
					todoDateStartSuccessors,
					todoDateStartTimezone,
					todoDurationEstimate,
					todoIsDraft,
					todoIsImportant,
					todoIsTimeSensitive,
					todoName,
					todoNotes,
					// --- OTHER ---
					todoIsLive,
					todoSubmit,
					// setters
					// --- PUBLIC ID ---
					setTodoId,
					// --- RELATIONS ---
					setTodoCategories,
					// --- FIELDS ---
					setTodoDateDue,
					setTodoDateDueTimezone,
					setTodoDateDueType,
					setTodoDateStart,
					setTodoDateStartPredecessors,
					setTodoDateStartPredecessorsAllAny,
					setTodoDateStartPredecessorsAndOr,
					setTodoDateStartSuccessors,
					setTodoDateStartTimezone,
					setTodoDurationEstimate,
					setTodoIsDraft,
					setTodoIsImportant,
					setTodoIsTimeSensitive,
					setTodoName,
					setTodoNotes,
					// --- OTHER ---
					setTodoIsLive,
					setTodoSubmit
				}
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useTodoCtx = () => useContext(Context)
