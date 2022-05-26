// Functions
import fetchApi from '#/fetch'
import set from '#/storage/set'

const LibAuthGetAndSetUser = async ({
	setAuthIsSignedIn,
	setAuthStage,
	setAuthToken,
	setAuthUser,
	setLoading,
	token,
	user = {}
}) => {
	const { data: apiAuthSignin } = await fetchApi({
		path: '/api/auth/signin',
		data: { ...user }
	})

	if (apiAuthSignin) {
		// Save login status for better UX on new page refresh, see hooks → app → onLoad
		set({ name: 'auth', value: true })

		setAuthToken(token)

		setAuthUser(apiAuthSignin)

		setAuthIsSignedIn(true)

		setLoading(false)
	}
	// Unauthorized
	else setAuthStage('signout')
}

export default LibAuthGetAndSetUser
