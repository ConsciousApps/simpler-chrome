// Packages
import { useRouter } from 'next/router'
// Contexts
import { useAuthCtx } from '-/auth'
// Elements
import Button from '~/button'

const DesignLayoutsAuthOnboardingComplete = () => {
	const router = useRouter()

	const { authUser, setAuthStage } = useAuthCtx()

	return (
		<>
			<div
				{...{
					className: 'w-full h-full bg-cover bg-no-repeat absolute top-0 right-0'
				}}
			/>

			<div className='relative'>
				<h3>Congratulations! 🎉</h3>

				<p>
					Welcome to simpler. Please expect to receive an email with more information about simpler
					soon.
				</p>

				<Button
					{...{
						action: () => {
							setAuthStage(null)

							if (authUser?.isNew) router.push('/tutorial')
						},
						modal: true,
						primary: true,
						text: 'Got it!',
						tw: 'mt-8 mx-auto'
					}}
				/>
			</div>
		</>
	)
}

export default DesignLayoutsAuthOnboardingComplete
