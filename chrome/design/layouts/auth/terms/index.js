// Packages
import { useTranslation } from 'react-i18next'
// Contexts
import { useAuthCtx } from '-/auth'
// Styles
import twText from '@/text'

const DesignLayoutsAuthTerms = () => {
	const { t } = useTranslation()

	const { authStage } = useAuthCtx()

	return (
		<p className='mt-4 text-sm text-secondary dark:text-secondaryDark sm:mt-4'>
			{t(`We respect your privacy.`)}{' '}
			{authStage === 'signin'
				? t(`By signing in`)
				: t(`By signing up for a free account (no credit card necessary)`)}
			{', '}
			{t(`you agree to our`)}{' '}
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
