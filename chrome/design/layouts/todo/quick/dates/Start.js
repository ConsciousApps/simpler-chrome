// Packages
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Elements
import Datetime from '~/datetime'

const DesignLayoutsTodoQuickDatesStartAndDueDates = ({ isError }) => {
	const { t } = useTranslation()

	const { setTodoDateStart } = useTodoCtx()

	const [date, setDate] = useState(null)
	const [time, setTime] = useState(null)

	useEffect(() => {
		if (date)
			setTodoDateStart(
				new Date(
					date?.getFullYear(),
					date?.getMonth(),
					date?.getDate(),
					time ? time.getHours() : 0,
					time ? time.getMinutes() : 0,
					0
				)
			)
		else setTodoDateStart(null)
	}, [date, time])

	return (
		<div className='my-2 flex'>
			<Datetime
				{...{
					dateFormat: 'D MMMM YYYY',
					isError,
					isText: true,
					label: t(`Start Date`),
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
						label: t(`Start Time (optional)`),
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
