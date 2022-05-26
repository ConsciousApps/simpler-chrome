// Packages
import { useState, useRef } from 'react'
import { Datepicker } from '@mobiscroll/react'
// Hooks
import useConfigureButtons from '=/design/elements/datetime/configureButtons'
// Elements
import Button from '~/datetime/Button'
import Label from '~/datetime/Label'

const DesignElementsDatetime = ({
	dateFormat,
	isError,
	isRange,
	isText,
	label,
	mode,
	setValue,
	timeFormat,
	value
}) => {
	const [handler, setHandler] = useState(null)
	const [open, setOpen] = useState(null)

	// useSetDatetime({ date, isRange, open, setDate, setValue, value })

	const clearButton = useConfigureButtons({ handler, setValue, value })

	const resetSeconds = d => {
		if (!d) return null

		d.setSeconds(0)

		d.setMilliseconds(0)

		return d
	}

	const labelRef = useRef(null)

	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<div ref={labelRef}>
				{!isText && <Button {...{ isRange, label, mode, value, setOpen }} />}

				{isText && <Label {...{ isError, isRange, label, mode, value, setOpen }} />}
			</div>

			<Datepicker
				anchor={labelRef?.current}
				buttons={clearButton}
				controls={mode} // `calendar`, `date`, `datetime`, `time`
				dateFormat={dateFormat}
				defaultSelection={value}
				display={'anchored'}
				inputComponent={null}
				isOpen={open}
				firstDay={1}
				onCancel={e => setValue(value)}
				onClose={e => setOpen(false)}
				onTempChange={e => {
					// Single
					if (!isRange && value?.getTime() !== e.value?.getTime()) setValue(resetSeconds(e.value))
					// Range
					else if (
						isRange &&
						value?.length &&
						((e.value[0]?.getTime() !== value[0]?.getTime() &&
							(e.value[0]?.getTime() < value[1]?.getTime() || !value[1])) ||
							(e.value[1]?.getTime() !== value[1]?.getTime() &&
								(e.value[1]?.getTime() > value[0]?.getTime() || !value[0])))
					)
						setValue([resetSeconds(e.value[0]), resetSeconds(e.value[1])])

					if (mode[0] === 'calendar') setOpen(false)
				}}
				ref={setHandler}
				select={!isRange ? 'date' : 'range'}
				selectMultiple={false}
				showInput={false}
				showOnClick={false}
				showOnFocus={false}
				stepMinute={5}
				theme='ios'
				themeVariant={'light'}
				timeFormat={timeFormat || 'h:mm a'}
				touchUi={true}
				value={value}
			/>
		</div>
	)
}

export default DesignElementsDatetime
