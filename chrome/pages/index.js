// Packages
import { SignedIn, SignedOut } from '@clerk/nextjs'
// Layouts
import Auth from '^/auth'

const PagesHome = () => (
	<div className='w-80 mx-auto p-4'>
		<SignedIn>Hello, world</SignedIn>

		<SignedOut>
			<Auth />
		</SignedOut>
	</div>
)

export default PagesHome
