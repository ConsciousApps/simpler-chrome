// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CollectionIcon } from '@heroicons/react/solid'
// Contexts
import { useLoadingCtx } from '-/loading'
import { useTodoCtx } from '-/todo'
// Hooks
import useGetCategories from '=/design/layouts/todo/getCategories'
import useGetPredecessors from '=/design/layouts/todo/getPredecessors'
import useIsQuickAddError from '=/design/layouts/todo/isQuickAddError'
import useLoadCategories from '=/design/layouts/todo/loadCategories'
import useLoadDuration from '=/design/layouts/todo/loadDuration'
import useQuickSave from '=/design/layouts/todo/quickSave'
import useResetQuickAdd from '=/design/layouts/todo/resetQuickAdd'
import useSaveDuration from '=/design/layouts/todo/saveDuration'
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
import ButtonSmall from '~/button/small'
import Input from '~/input'

const DesignLayoutsTodoQuick = ({ quickAdd, setQuickAdd, setQuickAddTodo }) => {
	const { t } = useTranslation()

	const { loading } = useLoadingCtx()

	const { setTodoDurationEstimate, setTodoIsDraft, setTodoName, todoDurationEstimate, todoName } =
		useTodoCtx()

	const [allAnyOptions, setAllAnyOptions] = useState(ALLANY)
	const [andOrOptions, setAndOrOptions] = useState(ANDOR)
	const [categoryOptions, setCategoryOptions] = useState([])
	const [dateStartPredecessors, setDateStartPredecessors] = useState([])
	const [durationOptions, setDurationOptions] = useState(DURATION)
	const [isDependency, setIsDependency] = useState(false)

	useResetQuickAdd({
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
	})

	useLoadDuration({ setOptions: setDurationOptions, value: todoDurationEstimate })

	useSaveDuration({ options: durationOptions, setValue: setTodoDurationEstimate })

	useGetCategories({ setCategoryOptions })

	useLoadCategories({ setCategoryOptions })

	useSetTodoCategories({ categoryOptions })

	useGetPredecessors({ setDateStartPredecessors, toggle: quickAdd })

	const { data: isError } = useIsQuickAddError()

	useQuickSave({ setQuickAdd, setQuickAddTodo })

	return (
		<>
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
					disabled: !todoName || isError || loading,
					loading,
					primary: true,
					text: t(`Quick add`),
					tw: 'mt-8 mx-auto'
				}}
			/>

			<div className='flex justify-center mt-4'>
				<ButtonSmall
					{...{
						action: () => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system'),
						Icon: CollectionIcon,
						text: t(`See your list`)
					}}
				/>
			</div>
		</>
	)
}

export default DesignLayoutsTodoQuick
