// Packages
import { useTranslation } from 'react-i18next'
// Contexts
import { useAuthCtx } from '-/auth'

const DesignLayoutsAuthDivider = () => {
	const { t } = useTranslation()

	const { authStage } = useAuthCtx()

	return (
		<div className='relative my-4 md:my-5'>
			<div className='absolute inset-0 flex items-center'>
				<div className='w-full border-t border-line dark:border-lineDark' />
			</div>

			<div className='relative flex justify-center text-sm'>
				<span className='px-2 bg-bgPrimary dark:bg-bgPrimaryDark text-secondary dark:text-secondaryDark'>
					{authStage === 'signup'
						? t(`Or register by using your account with:`)
						: t(`Or sign into simpler using:`)}
				</span>
			</div>
		</div>
	)
}

export default DesignLayoutsAuthDivider
