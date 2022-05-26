// Packages
import { Switch } from '@headlessui/react'

const DesignElementsToggleSmall = ({ disabled, icon, setValue, text, value }) => (
	<Switch.Group as='div' className='flex items-center'>
		<Switch
			checked={value}
			onChange={() => {
				if (!disabled) setValue(prev => !prev)
			}}
			className={`shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer ${
				!disabled
					? 'focus:outline-none focus:ring-2 focus:ring-brand1 dark:focus:ring-brand1Dark'
					: ''
			}`}
		>
			<span className='sr-only'>{text}</span>

			<span
				aria-hidden='true'
				className='pointer-events-none absolute bg-bgSecondary dark:bg-bgSecondaryDark w-full h-full rounded-xl'
			/>

			<span
				aria-hidden='true'
				className={`${
					value ? 'bg-brand1 dark:bg-brand1Dark' : ''
				} pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200`}
			/>

			<span
				aria-hidden='true'
				className={`${
					value ? 'translate-x-5' : 'translate-x-0'
				} pointer-events-none absolute left-0 inline-block h-5 w-5 rounded-full bg-bgPrimary dark:bg-bgPrimaryDark shadow transform transition-transform ease-in-out duration-200`}
			/>
		</Switch>

		<Switch.Label
			as='span'
			className='shrink-0 ml-2 flex cursor-pointer text-sm text-primary dark:text-primaryDark'
		>
			{icon}

			<span className='ml-1'>{text}</span>
		</Switch.Label>
	</Switch.Group>
)

export default DesignElementsToggleSmall
