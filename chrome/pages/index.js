// Packages
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'
// Layouts
import Terms from '^/terms'
// Elements
import Button from '~/button'
import Logo from '~/logo'
// Styles
import twText from '@/text'

const PagesHome = () => {
	const router = useRouter()

	const { signOut } = useAuth()

	if (typeof window === 'undefined') return null

	return (
		<>
			<SignedIn>
				<span onClick={() => signOut()}>sign out</span>
			</SignedIn>

			<SignedOut>
				<div className='w-full p-8'>
					<div
						className='cursor-pointer mt-4 mb-2'
						onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
					>
						<Logo />
					</div>

					<div className='flex flex-col items-center'>
						<p className={twText({ type: 'small' })}>
							<strong>simpler</strong> is a productivity app that helps you prioritize what needs to
							get done so you can focus on what truly matters.
						</p>

						<p className={twText({ type: 'small' })}>
							Learn more at{' '}
							<span
								onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
								className={twText({ type: 'link' })}
							>
								simplerlist.com
							</span>
						</p>

						<Terms />

						<div className='my-4'>
							<Button action={() => router.push('/signup')} primary={true} text='Sign up' />
						</div>

						<Button action={() => router.push('/signin')} primary={false} text='Sign in' />
					</div>
				</div>
			</SignedOut>
		</>
	)
}

export default PagesHome
