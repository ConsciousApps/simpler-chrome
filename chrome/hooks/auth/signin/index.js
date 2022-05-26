// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Contexts
import { useAuthCtx } from '-/auth'
import { useLoadingCtx } from '-/loading'
// Functions
import magic from '#/auth/magic'

const HooksAuthEmailSignin = ({ email, submit }) => {
	const router = useRouter()

	const { setAuthStage } = useAuthCtx()

	const { setLoading } = useLoadingCtx()

	useEffect(() => {
		if (submit) {
			;(async () => {
				setLoading(true)

				const token = await magic.auth.loginWithMagicLink({
					email,
					redirectURI: new URL('/auth', window.location.origin).href
				})

				if (token) {
					setAuthStage(null)

					router.push('/close')
				}
			})()
		}
	}, [submit])
}

export default HooksAuthEmailSignin
