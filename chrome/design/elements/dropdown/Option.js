// Packages
import { Listbox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const DesignElementsDropdownOption = ({ option }) => (
	<Listbox.Option
		className={({ active }) =>
			`cursor-pointer select-none list-none ml-0 relative py-2 pl-3 pr-9 ${
				active
					? 'text-inverted dark:text-invertedDark bg-brand1 dark:bg-brand1Dark'
					: 'text-primary dark:text-primaryDark'
			} hover:text-inverted dark:hover:text-invertedDark hover:bg-brand1 dark:hover:bg-brand1Dark focus:outline-none`
		}
		value={option}
	>
		{({ selected, active }) => (
			<>
				<span className={`block truncate`}>{option.label}</span>

				{option?.value ? (
					<span
						className={`w-8 h-8 absolute inset-y-1 right-0 flex justify-end items-center pr-4 ${
							active ? 'text-inverted dark:text-invertedDark' : 'text-brand1 dark:text-brand1Dark'
						} hover:text-inverted dark:hover:text-invertedDark`}
					>
						<FontAwesomeIcon icon={faCheck} size='sm' />
					</span>
				) : null}
			</>
		)}
	</Listbox.Option>
)

export default DesignElementsDropdownOption
