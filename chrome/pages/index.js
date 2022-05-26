// Contexts
import { useLoadingCtx } from '-/loading'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Form from '^/auth/Form'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Loading from '~/loading'
import Logo from '~/logo'

const PagesHome = () => {
	const { loading } = useLoadingCtx()

	useIsSignedIn()

	useSignout()

	return (
		<div className='p-4'>
			<div
				className='cursor-pointer'
				onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
			>
				<Logo tw='mx-auto w-auto h-8 mb-4' />
			</div>

			{!loading && (
				<>
					<Form />

					<Providers />

					<Terms />
				</>
			)}

			{loading && (
				<div className='relative h-96 flex justify-center items-center'>
					<Loading />
				</div>
			)}
		</div>
	)
}

export default PagesHome
