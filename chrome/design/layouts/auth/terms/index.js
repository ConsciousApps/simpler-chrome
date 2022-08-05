// Packages
import { useTranslation } from 'react-i18next'
// Styles
import twText from '@/text'

const DesignLayoutsAuthTerms = () => {
	const { t } = useTranslation()

	return (
		<p className='mt-4 text-xs text-secondary dark:text-secondaryDark sm:mt-4'>
			{t(`We respect your privacy. By signing in, you agree to our`)}{' '}
			<span
				onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/legal/terms`, '_system')}
				className={twText({ size: 'tiny', type: 'link' })}
			>
				{t(`terms of service`)}
			</span>{' '}
			{t(`and`)}{' '}
			<span
				onClick={() =>
					window.open(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/legal/privacy`, '_system')
				}
				className={twText({ size: 'tiny', type: 'link' })}
			>
				{t(`privacy policy`)}
			</span>
			. For more information, please visit{' '}
			<span
				onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
				className={twText({ size: 'tiny', type: 'link' })}
			>
				simpler
			</span>
			.
		</p>
	)
}

export default DesignLayoutsAuthTerms
