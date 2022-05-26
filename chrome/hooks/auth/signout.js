// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Contexts
import { useAuthCtx } from '-/auth'
// Functions
import magicLogout from '#/auth/magic/logout'
import remove from '#/storage/remove'

const HooksAuthSignout = () => {
	const router = useRouter()

	const {
		authIsSignedIn,
		authStage,
		authToken,
		setAuthIsSignedIn,
		setAuthStage,
		setAuthToken,
		setAuthUser
	} = useAuthCtx()

	useEffect(() => {
		if (authStage === 'signout') {
			;(async () => {
				const isSignedOut = await magicLogout()

				if ((authIsSignedIn || authToken) && isSignedOut) {
					console.info('Signing out...')

					remove('auth')

					setAuthUser(null)

					setAuthStage(null)

					setAuthToken(null)

					setAuthIsSignedIn(false)

					router.push('/')
				}
			})()
		}
	}, [authStage])
}

export default HooksAuthSignout
