// Packages
import { useRef } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
// Styles
import twInput from '@/input'

const ElementsInput = ({
	disabled,
	error,
	focus,
	label,
	name,
	onBlur = () => null,
	onChange = () => null,
	onFocus = () => null,
	onKeyPress = () => null,
	placeholder,
	textarea,
	tw,
	type,
	value
}) => {
	const textInput = useRef(null)

	const inputValues = {
		autoFocus: focus,
		className: `${twInput({ disabled, type })} ${tw}`,
		disabled,
		name,
		onBlur,
		onChange: e => {
			let newVal

			if (type === 'name') newVal = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
			else if (type === 'email') newVal = e.target.value.toLowerCase()
			else newVal = e.target.value

			onChange({ name: e.target.name, value: newVal })
		},
		onFocus,
		onKeyPress,
		placeholder,
		ref: textInput,
		type: 'text',
		value
	}

	return (
		<div className={`w-full`}>
			{label && (
				<label
					htmlFor={name}
					className={`block ml-1 mb-1 text-sm text-secondary dark:text-secondaryDark`}
				>
					{label}
				</label>
			)}

			<div className='relative rounded-md shadow-sm'>
				{!textarea && <input {...inputValues} />}

				{textarea && <textarea {...{ ...inputValues, rows: 5 }} />}

				{error && (
					<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
						<ExclamationCircleIcon
							className='h-5 w-5 text-alert dark:text-alertDark'
							aria-hidden='true'
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default ElementsInput
