// Packages
import { useTranslation } from 'react-i18next'
// Styles
import twText from '@/text'

const DesignLayoutsAuthTerms = () => {
	const { t } = useTranslation()

	return (
		<p className='text-sm text-secondary dark:text-secondaryDark sm:mt-4'>
			{t(`We respect your privacy. By signing in, you agree to our`)}{' '}
			<span
				onClick={() => window.open('/legal/terms', '_system')}
				className={twText({ size: 'small', type: 'link' })}
			>
				{t(`terms of service`)}
			</span>{' '}
			{t(`and`)}{' '}
			<span
				onClick={() => window.open('/legal/privacy', '_system')}
				className={twText({ size: 'small', type: 'link' })}
			>
				{t(`privacy policy`)}
			</span>
			.
		</p>
	)
}

export default DesignLayoutsAuthTerms
