// Packages
import { useState } from 'react'
// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Auth from '^/auth'
import QuickAdd from '^/todo/quick'

const PagesHome = () => {
	const { authUser } = useAuthCtx()

	const [quickAdd, setQuickAdd] = useState(true)

	useIsSignedIn()

	useSignout()

	return (
		<div className='p-4'>
			{!authUser && <Auth />}

			{authUser && <QuickAdd {...{ quickAdd, setQuickAdd }} />}

			{!quickAdd && <div>Hello, world!</div>}
		</div>
	)
}

export default PagesHome
