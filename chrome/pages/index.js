// Packages
import { useTranslation } from 'react-i18next'
// Contexts
import { useLoadingCtx } from '-/loading'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Form from '^/auth/Form'
import Divider from '^/auth/Divider'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Loading from '~/loading'

const PagesHome = () => {
	const { t } = useTranslation()

	const { loading } = useLoadingCtx()

	useIsSignedIn()

	useSignout()

	return (
		<>
			<h3>{t(`Create a free account`)}</h3>

			{!loading && (
				<>
					<Form />

					<Divider />

					<Providers />

					<Terms />
				</>
			)}

			{loading && (
				<div className='relative h-96 flex justify-center items-center'>
					<Loading />
				</div>
			)}
		</>
	)
}

export default PagesHome
