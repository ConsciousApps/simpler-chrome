// Packages
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faApple,
	faDiscord,
	faFacebook,
	faGithub,
	faGoogle,
	faTwitter
} from '@fortawesome/free-brands-svg-icons'
// Contexts
import { useLoadingCtx } from '-/loading'
// Functions
import magic from '#/auth/magic'
// Styles
import twButton from '@/button'

const DesignLayoutsAuthProvider = ({ provider }) => {
	const { t } = useTranslation()

	const { setLoading } = useLoadingCtx()

	const icon = x =>
		[
			x === 'Apple' ? faApple : null,
			x === 'Discord' ? faDiscord : null,
			x === 'Facebook' ? faFacebook : null,
			x === 'GitHub' ? faGithub : null,
			x === 'Google' ? faGoogle : null,
			x === 'Twitter' ? faTwitter : null
		].find(x => x)

	const socialSignin = async x => {
		setLoading(true)

		await magic.oauth.loginWithRedirect({
			provider: x,
			redirectURI: new URL('/auth', window.location.origin).href
		})
	}

	return (
		<div
			className={`flex items-center ${twButton({ light: true })}`}
			onClick={() => socialSignin(provider.toLowerCase())}
		>
			<span className='sr-only'>{`${t(`Sign in with`)} ${provider}`}</span>

			<div className='flex shrink-0 items-center justify-center mr-1'>
				<FontAwesomeIcon icon={icon(provider)} size='lg' style={{ margin: 0, padding: 0 }} />
			</div>

			<div className='hidden sm:block text-xs sm:text-sm md:ml-2'>{provider}</div>
		</div>
	)
}

export default DesignLayoutsAuthProvider
