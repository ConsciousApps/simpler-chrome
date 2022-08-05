// Packages
import { useRouter } from 'next/router'
// Layouts
import Form from '^/auth/Form'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Button from '~/button'

const DesignLayoutsAuth = ({ mode }) => {
	const router = useRouter()

	return (
		<>
			<h3>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h3>

			<Form mode={mode} />

			<div className='relative my-4 md:my-5'>
				<div className='relative flex justify-center text-sm'>
					<span className='px-2 text-secondary dark:text-secondaryDark'>
						Or {mode === 'signin' ? 'sign in' : 'sign up'} by using your account with:
					</span>
				</div>
			</div>

			<Providers />

			<Terms />

			<Button {...{ action: () => router.push('/'), text: 'Back', tw: 'w-full mt-4' }} />
		</>
	)
}

export default DesignLayoutsAuth
