// Packages
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
// Hooks
import useSetOptions from '=/design/elements/dropdown/setOptions'
// Elements
import DropdownButton from '~/dropdown/Button'
import DropdownOption from '~/dropdown/Option'

const DesignElementsDropdown = ({
	focus,
	multiple = true,
	optional = false,
	options = [],
	placeholder,
	setOptions
}) => {
	const [selected, setSelected] = useState(null)

	useSetOptions({ multiple, optional, selected, setOptions, setSelected })

	return (
		<Listbox value={selected} onChange={setSelected}>
			{({ open }) => (
				<div className='relative w-full max-w-sm'>
					<DropdownButton {...{ focus, multiple, options, placeholder }} />

					<Transition
						show={open}
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options
							static
							className='absolute z-10000 mt-1 w-full bg-white dark:bg-invertedDark shadow-lg max-h-60 rounded-lg py-1 overflow-auto focus:outline-none focus-within:outline-none'
						>
							{options?.map((option, i) => (
								<DropdownOption {...{ key: i, option }} />
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	)
}

export default DesignElementsDropdown
