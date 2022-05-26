// Packages
import pluralize from 'pluralize'
import { Listbox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DesignElementsDropdownButton = ({ focus, multiple, options, placeholder }) => (
	<Listbox.Button
		autoFocus={focus}
		className='h-11 text-sm relative w-full border border-line rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-brand1 focus:border-brand1'
	>
		{/* Placeholder */}
		<span className='block truncate'>
			{/* No selection */}
			{!options?.find(x => x.value) && placeholder ? (
				<span className='text-tertiary dark:text-tertiaryDark'>{placeholder}</span>
			) : null}

			{/* Single selection */}
			{!multiple && options?.find(x => x.value) ? options.find(x => x.value).label : null}

			{/* Multiple selections */}
			{multiple && options?.some(x => x.value)
				? `${options.filter(x => x.value).length} ${pluralize(
						'selection',
						options.filter(x => x.value).length
				  )}`
				: null}
		</span>

		<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none pb-1'>
			<div className='h-5 w-5 text-tertiary dark:text-tertiaryDark'>
				<FontAwesomeIcon icon={faChevronDown} size='sm' />
			</div>
		</div>
	</Listbox.Button>
)

export default DesignElementsDropdownButton
