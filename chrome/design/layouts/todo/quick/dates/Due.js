// Packages
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Elements
import Datetime from '~/datetime'

const DesignLayoutsTodoQuickDatesStartAndDueDates = ({ isError }) => {
	const { t } = useTranslation()

	const { setTodoDateDue } = useTodoCtx()

	const [date, setDate] = useState(null)
	const [time, setTime] = useState(null)

	useEffect(() => {
		if (date)
			setTodoDateDue(
				new Date(
					date?.getFullYear(),
					date?.getMonth(),
					date?.getDate(),
					time ? time.getHours() : 23,
					time ? time.getMinutes() : 55,
					0
				)
			)
		else setTodoDateDue(null)
	}, [date, time])

	return (
		<div className='my-2 flex'>
			<Datetime
				{...{
					dateFormat: 'D MMMM YYYY',
					isError,
					isText: true,
					label: t(`Due Date`),
					mode: ['calendar'],
					setValue: setDate,
					value: date
				}}
			/>

			{date && (
				<Datetime
					{...{
						isError,
						isText: true,
						label: t(`Due Time (optional)`),
						mode: ['time'],
						setValue: setTime,
						timeFormat: 'h:mm A',
						value: time
					}}
				/>
			)}
		</div>
	)
}

export default DesignLayoutsTodoQuickDatesStartAndDueDates
