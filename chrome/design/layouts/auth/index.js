// Contexts
import { useLoadingCtx } from '-/loading'
// Layouts
import Form from '^/auth/Form'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Loading from '~/loading'
import Logo from '~/logo'
// Styles
import twText from '@/text'

const PagesHome = () => {
	const { loading } = useLoadingCtx()

	return (
		<>
			<div
				className='cursor-pointer text-brand1'
				onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
			>
				<Logo />
			</div>

			{!loading && (
				<>
					<div>
						<p className={twText({ type: 'small' })}>
							<strong>simpler</strong> is a unique to-do app that helps you do what needs to get
							done so you can focus on what truly matters.
						</p>

						<p className={twText({ type: 'small' })}>
							Learn more at <span className={twText({ type: 'link' })}>useSimpler.com</span>
						</p>
					</div>

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
		</>
	)
}

export default PagesHome
