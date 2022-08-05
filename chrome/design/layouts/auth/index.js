// Packages
import { useState } from 'react'
import { useRouter } from 'next/router'
// Layouts
import Form from '^/auth/form'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Button from '~/button'

const DesignLayoutsAuth = ({ mode }) => {
	const router = useRouter()

	const [stage, setStage] = useState('email')

	return (
		<>
			<h3>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h3>

			<Form {...{ mode, stage, setStage }} />

			{stage === 'email' && (
				<span className='relative my-4 md:my-5 flex justify-center text-xs px-2 text-secondary dark:text-secondaryDark'>
					Or {mode === 'signin' ? 'sign in' : 'sign up'} by using your account with:
				</span>
			)}

			{stage === 'email' && <Providers />}

			<Button {...{ action: () => router.push('/'), text: 'Back', tw: 'w-full mt-4' }} />

			{stage === 'email' && <Terms />}
		</>
	)
}

export default DesignLayoutsAuth
