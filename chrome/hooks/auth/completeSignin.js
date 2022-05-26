// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Contexts
import { useAuthCtx } from '-/auth'
import { useLoadingCtx } from '-/loading'
// Functions
import getAndSetUser from '#/auth/getAndSetUser'
import magic from '#/auth/magic'
import socialProviders from '#/auth/socialProviders'

const HooksAuthCompleteSignin = () => {
	const router = useRouter()

	const { setAuthIsSignedIn, setAuthStage, setAuthToken, setAuthUser } = useAuthCtx()

	const { setLoading } = useLoadingCtx()

	useEffect(() => {
		setLoading(true)
		;(async () => {
			// Social provider
			if (router.query.provider) {
				try {
					const result = await magic.oauth.getRedirectResult()

					if (result?.oauth)
						await getAndSetUser({
							router,
							setAuthIsSignedIn,
							setAuthStage,
							setAuthToken,
							setAuthUser,
							setLoading,
							token: result?.magic?.idToken,
							user: socialProviders({
								provider: result?.oauth?.provider,
								user: result?.oauth?.userInfo
							})
						})
				} catch (err) {
					console.error(err)
				}
			}
		})()
	}, [router.query])
}

export default HooksAuthCompleteSignin
