// Packages
import { useState } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
// Hooks
import useSetOptions from '=/design/elements/dropdown/setOptions'

const DesignElementsCombobox = ({
	disabled,
	label,
	multiple,
	options,
	placeholder,
	setOptions
}) => {
	const [query, setQuery] = useState('')
	const [selected, setSelected] = useState(null)

	useSetOptions({ multiple, selected, setOptions, setQuery, setSelected })

	const filteredResults =
		query === ''
			? options
			: options?.filter(option => option.label.toLowerCase().includes(query.toLowerCase()))

	return (
		<Combobox
			as='div'
			className={'relative w-full max-w-md'}
			value={''}
			onChange={x => {
				if (!disabled) setSelected(x)
			}}
		>
			{label && (
				<Combobox.Label
					className={`block ml-0.5 mb-1 text-xs font-medium ${
						disabled
							? 'text-disabled dark:text-disabledDark'
							: 'text-secondary dark:text-secondaryDark'
					}`}
				>
					{label}
				</Combobox.Label>
			)}

			<div className='relative'>
				{(placeholder || multiple) && !query ? (
					<div className='absolute left-4 top-3 text-sm text-tertiary dark:text-tertiaryDark'>
						{placeholder && !options?.find(x => x.value) ? placeholder : null}

						{options?.find(x => x.value)
							? `${options.filter(x => x.value)?.length} selected`
							: null}
					</div>
				) : null}

				<Combobox.Input
					className={`w-full h-11 shadow-sm rounded-lg border-line dark:border-lineDark bg-bgPrimary dark:bg-bgSecondaryDark pl-3 pr-10 ${
						!disabled
							? 'focus:border-brand1 dark:focus:border-brand1Dark focus:ring-brand1 dark:focus:ring-brand1Dark'
							: ''
					}`}
					disabled={disabled}
					onChange={event => {
						if (!disabled) setQuery(event.target.value)
					}}
					displayValue={() => (!multiple ? selected : null)}
				/>

				<Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-lg px-2 focus:outline-none'>
					<SelectorIcon
						className='h-5 w-5 text-tertiary dark:text-tertiaryDark'
						aria-hidden='true'
					/>
				</Combobox.Button>

				{!disabled && filteredResults?.length ? (
					<Combobox.Options className='absolute z-9000 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-bgPrimary dark:bg-bgSecondaryDark py-1 shadow-lg ring-1 ring-line focus:outline-none'>
						{filteredResults.map((option, optionIdx) => (
							<Combobox.Option
								key={optionIdx}
								value={option}
								className={({ active }) =>
									`relative list-none cursor-pointer select-none py-2 ml-0 px-4 text-primary dark:text-primaryDark ${
										active ? 'bg-brand2 dark:to-brand2Dark bg-opacity-20' : ''
									}`
								}
							>
								{({ active }) => (
									<>
										<div className='flex items-center'>
											{option.image && (
												<img
													src={option.image}
													alt=''
													className='h-6 w-6 flex-shrink-0 rounded-full'
												/>
											)}

											<span className={`block truncate ml-4 ${option.value && 'font-semibold'}`}>
												{option.label}
											</span>
										</div>

										{option.value && (
											<span
												className={`absolute inset-y-0 right-0 flex items-center pr-1.5 text-brand1 dark:text-brand1Dark`}
											>
												<CheckIcon className='h-5 w-5' aria-hidden='true' />
											</span>
										)}
									</>
								)}
							</Combobox.Option>
						))}
					</Combobox.Options>
				) : null}
			</div>
		</Combobox>
	)
}

export default DesignElementsCombobox
