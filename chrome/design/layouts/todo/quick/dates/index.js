// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Hooks
import useIsQuickAddError from '=/design/layouts/todo/isQuickAddError'
import useLoadDateStartDependencies from '=/design/layouts/todo/loadDateStartDependencies'
import useSaveDateStartDependencies from '=/design/layouts/todo/saveDateStartDependencies'
import useSetDateDueType from '=/design/layouts/todo/setDateDueType'
import useSetDateDueTypeOptions from '=/design/layouts/todo/setDateDueTypeOptions'
// Functions
import dateTimeStampShort from '#/dates/dateTimeStampShort'
// Constants
import DATEDUETYPE from '$/schema/todo/dateDueType'
// Layouts
import DependenciesSelection from '^/todo/add/start/dependencies/Selection'
import Due from '^/todo/quick/dates/Due'
import Start from '^/todo/quick/dates/Start'
// Elements
import ButtonGroup from '~/button/group'

const DesignLayoutsTodoQuickDates = ({
	allAnyOptions,
	andOrOptions,
	dateStartPredecessors,
	isDependency,
	setAllAnyOptions,
	setAndOrOptions,
	setDateStartPredecessors,
	setIsDependency
}) => {
	const { t } = useTranslation()

	const { todoDateDue, todoDateStart } = useTodoCtx()

	const [dateDueTypeOptions, setDateDueTypeOptions] = useState(DATEDUETYPE)

	const { data: hasLoaded } = useLoadDateStartDependencies({
		setAndOrOptions,
		setAllAnyOptions,
		setDateStartPredecessors
	})

	useSaveDateStartDependencies({ allAnyOptions, andOrOptions, dateStartPredecessors, hasLoaded })

	useSetDateDueTypeOptions({ date: todoDateDue, setDateDueTypeOptions })

	useSetDateDueType({ dateDueTypeOptions })

	const { data: isError } = useIsQuickAddError()

	const highlight =
		'text-sm text-primary dark:text-primaryDark bg-bgSecondary dark:bg-bgSecondaryDark px-2 rounded mx-1'

	return (
		<>
			<Start {...{ isError }} />

			{!isDependency && (
				<div className='text-sm text-secondary dark:text-secondaryDark text-center'>
					{t(`Does this to-do have`)}{' '}
					<span
						onClick={() => setIsDependency(true)}
						className='cursor-pointer text-brand1 dark:text-brand1Dark'
					>
						{t(`dependencies?`)}
					</span>
				</div>
			)}

			{isDependency && !isError && todoDateStart && (
				<div className='mb-4 text-sm text-secondary dark:text-secondaryDark text-center'>
					{t(`Start this to-do on`)}
					<span className={highlight}>{dateTimeStampShort(todoDateStart)}</span>
				</div>
			)}

			{isDependency && !isError && !todoDateStart && (
				<div className='mb-4 text-sm text-secondary dark:text-secondaryDark text-center'>
					{t(`Start this to-do only once I complete`)}
				</div>
			)}

			{isDependency && !isError && (
				<DependenciesSelection
					{...{
						allAnyOptions,
						andOrOptions,
						dateFromString: todoDateStart,
						setAllAnyOptions,
						setAndOrOptions,
						setDateStartPredecessors,
						dateStartPredecessors
					}}
				/>
			)}

			<Due {...{ isError }} />

			{todoDateDue && (
				<div className='my-2 flex justify-center'>
					<ButtonGroup
						{...{
							buttons: dateDueTypeOptions?.filter(x => x.id !== 'someday'),
							disabled: false,
							setButtons: setDateDueTypeOptions
						}}
					/>
				</div>
			)}
		</>
	)
}

export default DesignLayoutsTodoQuickDates
