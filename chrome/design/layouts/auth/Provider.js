// Packages
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styles
import twButton from '@/button'

const DesignLayoutsAuthProvider = ({ provider }) => {
	const { t } = useTranslation()

	const socialSignin = () => null

	return (
		<div
			className={`flex items-center my-3 text-secondary dark:text-secondaryDark mx-auto cursor-pointer hover:text-primary dark:hover:text-primaryDark`}
			onClick={() => socialSignin(provider?.name.toLowerCase())}
		>
			<span className='sr-only'>{`${t(`Sign in with`)} ${provider?.name}`}</span>

			<div className='flex shrink-0 w-5 h-5 items-center justify-center'>
				<FontAwesomeIcon icon={provider?.icon} style={{ width: '24px', height: '24px' }} />
			</div>

			<div className='block text-lg font-medium ml-2'>{provider?.name}</div>
		</div>
	)
}

export default DesignLayoutsAuthProvider
