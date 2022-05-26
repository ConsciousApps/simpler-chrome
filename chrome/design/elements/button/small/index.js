// Packages
import { useTranslation } from 'react-i18next'

const DesignElementsButtonSmall = ({ action, active, disabled, Icon, text }) => {
	const { t } = useTranslation()

	return (
		<button
			type='button'
			className={`inline-flex items-center px-2.5 py-1.5 text-sm ${[
				!disabled && !active
					? 'cursor-pointer text-tertiary dark:text-tertiaryDark hover:text-brand1 dark:hover:text-brand1Dark'
					: null,
				!disabled && active
					? 'cursor-pointer text-brand1 dark:text-brand1Dark hover:text-brand2 dark:hover:text-brand2Dark'
					: null,
				disabled ? 'cursor-notAllowed text-disabled dark:text-disabledDark' : null
			].find(x => x)} focus:outline-none`}
			onClick={() => {
				if (!disabled) action()
			}}
		>
			{Icon && <Icon className='mr-3 h-5 w-5' aria-hidden='true' />}

			<span>{t(text)}</span>
		</button>
	)
}

export default DesignElementsButtonSmall
