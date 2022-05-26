// Packages
import { useEffect } from 'react'
// Contexts
import { useAuthCtx } from '-/auth'
import { useLoadingCtx } from '-/loading'
// Functions
import magic from '#/auth/magic'

const HooksAuthEmailSignin = ({ email, submit }) => {
	const { setAuthStage } = useAuthCtx()

	const { setLoading } = useLoadingCtx()

	useEffect(() => {
		if (submit) {
			;(async () => {
				setLoading(true)

				const token = await magic.auth.loginWithEmailOTP({ email })

				if (token) setAuthStage(null)
			})()
		}
	}, [submit])
}

export default HooksAuthEmailSignin
