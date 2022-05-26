// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
// Contexts
import { useAuthCtx } from '-/auth'
// Functions
import fetchApi from '#/fetch'
import get from '#/storage/get'
import magicGetToken from '#/auth/magic/getToken'
import magicIsSignedIn from '#/auth/magic/isSignedIn'

const HooksAppOnLoad = () => {
	const router = useRouter()

	const { authUser, authToken, setAuthIsSignedIn, setAuthStage, setAuthToken, setAuthUser } =
		useAuthCtx()

	const { data: apiUserGet } = useSWR(authToken ? `/api/user/get` : null, path =>
		fetchApi({ isSWR: true, path })
	)

	useEffect(() => {
		// Set it right away for a snappier UX, then verify via magic below
		if (get('auth')) setAuthIsSignedIn(true)

		if (router.pathname !== '/auth') {
			;(async () => {
				const isSignedIn = await magicIsSignedIn()

				if (isSignedIn) {
					setAuthIsSignedIn(true)

					const token = await magicGetToken()

					setAuthToken(token)
				}
				// Not signed in
				else setAuthStage('signout')
			})()
		}
	}, [])

	useEffect(() => {
		if (apiUserGet) setAuthUser({ isNew: authUser?.isNew, ...apiUserGet })
	}, [apiUserGet])
}

export default HooksAppOnLoad
