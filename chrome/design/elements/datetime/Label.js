// Packages
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'react-i18next'
// Functions
import dateShort from '#/dates/dateShort'
import dateTimeShort from '#/dates/dateTimeShort'
import timeStamp from '#/dates/timeStamp'

const DesignElementsCalendarLabel = ({ isError, isRange, label, mode, value, setOpen }) => {
	const { t } = useTranslation()

	return (
		<div onClick={() => setOpen(prev => !prev)} className='cursor-pointer inline-flex'>
			<div
				className={`relative inline-flex items-center py-2 pl-3 p-2.5 text-sm ${
					!isError ? 'text-primary dark:text-primaryDark' : 'text-alert dark:text-alertDark'
				}`}
			>
				{[
					!value && !label ? t(`Please select...`) : null,
					!value && label ? label : null,
					mode?.includes('calendar') ? dateShort(value) : null,
					mode?.includes('time') && !isRange ? timeStamp(value) : null,
					!mode?.includes('time') && !isRange ? dateTimeShort(value) : null,
					isRange && value?.length === 2 ? `${timeStamp(value[0])}-${timeStamp(value[1])}` : null
				].find(x => x)}
			</div>

			<div className='relative inline-flex items-center text-sm text-primary dark:text-primaryDark'>
				<span className='sr-only'>Click to open calendar</span>

				<ChevronDownIcon
					className={`h-5 w-5 ${
						!isError ? 'text-primary dark:text-primaryDark' : 'text-alert dark:text-alertDark'
					}`}
					aria-hidden='true'
				/>
			</div>
		</div>
	)
}

export default DesignElementsCalendarLabel
