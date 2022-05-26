// Hooks
import useCompleteSignin from '=/auth/completeSignin'
// Elements
import Loading from '~/loading'

const PagesAuth = () => {
	useCompleteSignin()

	return (
		<div className='relative h-screen'>
			<Loading />
		</div>
	)
}

export default PagesAuth
