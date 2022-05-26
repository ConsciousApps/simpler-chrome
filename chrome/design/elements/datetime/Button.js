// Packages
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'react-i18next'
// Functions
import dateShort from '#/dates/dateShort'
import dateTimeShort from '#/dates/dateTimeShort'
import timeStamp from '#/dates/timeStamp'

const DesignElementsCalendarButton = ({ isRange, label, mode, value, setOpen }) => {
	const { t } = useTranslation()

	return (
		<div
			onClick={() => setOpen(prev => !prev)}
			className='cursor-pointer inline-flex shadow-sm rounded-xl divide-x divide-line dark:divide-lineDark'
		>
			<div className='relative inline-flex items-center py-2 pl-3 pr-4 border border-transparent rounded-l-lg shadow-sm p-2.5 text-lg font-medium text-white dark:text-white bg-brand1 dark:bg-brand1Dark hover:bg-brand2 dark:hover:bg-brand2Dark'>
				{[
					!value && !label ? t(`Please select...`) : null,
					!value && label ? label : null,
					mode?.includes('calendar') ? dateShort(value) : null,
					!isRange ? dateTimeShort(value) : null,
					isRange && value?.length === 2 ? `${timeStamp(value[0])}-${timeStamp(value[1])}` : null
				].find(x => x)}
			</div>

			<div className='relative inline-flex items-center p-2 rounded-l-none rounded-r-lg text-sm font-medium text-white dark:text-white bg-brand1 dark:bg-brand1Dark hover:bg-brand2 dark:hover:bg-brand2Dark'>
				<span className='sr-only'>Click to open calendar</span>

				<ChevronDownIcon className='h-5 w-5 text-white' aria-hidden='true' />
			</div>
		</div>
	)
}

export default DesignElementsCalendarButton
