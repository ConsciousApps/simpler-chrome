// Packages
import { useEffect } from 'react'
// Contexts
import { useAuthCtx } from '-/auth'
import { useLoadingCtx } from '-/loading'
// Functions
import getAndSetUser from '#/auth/getAndSetUser'
import magic from '#/auth/magic'

const HooksAuthEmailSignin = ({ email, submit }) => {
	const { setAuthIsSignedIn, setAuthStage, setAuthToken, setAuthUser } = useAuthCtx()

	const { setLoading } = useLoadingCtx()

	useEffect(() => {
		if (submit) {
			;(async () => {
				setLoading(true)

				const token = await magic.auth.loginWithEmailOTP({ email })

				if (token) {
					setAuthStage(null)

					await getAndSetUser({
						setAuthIsSignedIn,
						setAuthStage,
						setAuthToken,
						setAuthUser,
						setLoading,
						token
					})
				}
			})()
		}
	}, [submit])
}

export default HooksAuthEmailSignin
