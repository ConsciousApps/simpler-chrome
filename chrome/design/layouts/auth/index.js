// Layouts
import Form from '^/auth/Form'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'

const DesignLayoutsAuth = () => (
	<>
		<h3>Sign in</h3>

		<Form />

		<div className='relative my-4 md:my-5'>
			<div className='relative flex justify-center text-sm'>
				<span className='px-2 text-secondary dark:text-secondaryDark'>
					Or sign up by using your account with:
				</span>
			</div>
		</div>

		<Providers />

		<Terms />
	</>
)

export default DesignLayoutsAuth
