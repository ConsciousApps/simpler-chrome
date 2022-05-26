// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Auth from '^/auth'

const PagesHome = () => {
	const { authUser } = useAuthCtx()

	useIsSignedIn()

	useSignout()

	return <div className='p-4'>{!authUser && <Auth />}</div>
}

export default PagesHome
