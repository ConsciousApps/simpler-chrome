// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Hooks
import useGetCategories from '=/design/layouts/todo/getCategories'
import useGetPredecessors from '=/design/layouts/todo/getPredecessors'
import useIsQuickAddError from '=/design/layouts/todo/isQuickAddError'
import useLoadCategories from '=/design/layouts/todo/loadCategories'
import useLoadDurationValue from '=/design/layouts/animate/pages/dropdown/loadValue'
import useQuickSave from '=/design/layouts/todo/quickSave'
import useResetQuickAdd from '=/design/layouts/todo/resetQuickAdd'
import useSaveDurationValue from '=/design/layouts/animate/pages/dropdown/saveValue'
import useSetTodoCategories from '=/design/layouts/todo/setTodoCategories'
// Constants
import ALLANY from '$/schema/todo/dateStartPredecessors/allAny'
import ANDOR from '$/schema/todo/dateStartPredecessors/andOr'
import DURATION from '$/schema/todo/duration'
// Layouts
import Dates from '^/todo/quick/dates'
import Dropdowns from '^/todo/quick/dropdowns'
import Modifiers from '^/todo/quick/modifiers'
import Notes from '^/todo/quick/notes'
// Elements
import Button from '~/button'
import Input from '~/input'
import Modal from '~/modal'

const DesignLayoutsTodoQuick = ({ listData, quickAdd, setQuickAdd }) => {
	const { t } = useTranslation()

	const { setTodoDurationEstimate, setTodoIsDraft, setTodoName, todoDurationEstimate, todoName } =
		useTodoCtx()

	const [allAnyOptions, setAllAnyOptions] = useState(ALLANY)
	const [andOrOptions, setAndOrOptions] = useState(ANDOR)
	const [categoryOptions, setCategoryOptions] = useState([])
	const [dateStartPredecessors, setDateStartPredecessors] = useState([])
	const [durationOptions, setDurationOptions] = useState(DURATION)
	const [isDependency, setIsDependency] = useState(false)

	useLoadDurationValue({ setOptions: setDurationOptions, value: todoDurationEstimate })

	useSaveDurationValue({ options: durationOptions, setValue: setTodoDurationEstimate })

	useGetCategories({ setCategoryOptions })

	useLoadCategories({ setCategoryOptions })

	useSetTodoCategories({ categoryOptions })

	useGetPredecessors({ setDateStartPredecessors, toggle: quickAdd })

	useResetQuickAdd({
		allAnyOptions,
		andOrOptions,
		categoryOptions,
		dateStartPredecessors,
		durationOptions,
		isDependency,
		quickAdd,
		setAllAnyOptions,
		setAndOrOptions,
		setCategoryOptions,
		setDateStartPredecessors,
		setDurationOptions,
		setIsDependency
	})

	const { data: isError } = useIsQuickAddError()

	useQuickSave({ listData, quickAdd, setQuickAdd })

	return (
		<Modal {...{ close: () => setQuickAdd(false), isOpen: quickAdd, large: true }}>
			<Input
				{...{
					focus: true,
					onChange: ({ value }) => setTodoName(value),
					placeholder: t(`To-do`),
					type: 'name',
					value: todoName || ''
				}}
			/>

			<Dates
				{...{
					allAnyOptions,
					andOrOptions,
					dateStartPredecessors,
					isDependency,
					setAllAnyOptions,
					setAndOrOptions,
					setDateStartPredecessors,
					setIsDependency
				}}
			/>

			<Modifiers />

			<Dropdowns
				{...{ categoryOptions, durationOptions, setCategoryOptions, setDurationOptions }}
			/>

			<Notes />

			<Button
				{...{
					action: () => setTodoIsDraft(false),
					disabled: !todoName || isError,
					primary: true,
					text: t(`Quick add`),
					tw: 'mt-8 mx-auto'
				}}
			/>

			<Button
				{...{
					action: () => setQuickAdd(false),
					text: t(`Close`),
					tw: 'mt-4 mx-auto'
				}}
			/>
		</Modal>
	)
}

export default DesignLayoutsTodoQuick
