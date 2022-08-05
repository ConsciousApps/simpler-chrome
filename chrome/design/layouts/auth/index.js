// Packages
import { useRouter } from 'next/router'
// Layouts
import Terms from '^/auth/terms'
// Elements
import Button from '~/button'
import Logo from '~/logo'
// Styles
import twText from '@/text'

const PagesHome = () => {
	const router = useRouter()

	return (
		<>
			<div
				className='cursor-pointer text-brand1'
				onClick={() => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system')}
			>
				<Logo />
			</div>

			<div className='flex flex-col items-center'>
				<p className={twText({ type: 'small' })}>
					<strong>simpler</strong> is a productivity app that helps you prioritize what needs to get
					done so you can focus on what truly matters.
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

				<div className='my-4'>
					<Button action={() => router.push('/signup')} primary={true} text='Sign up today' />
				</div>

				<Button action={() => router.push('/signin')} primary={false} text='Sign in' />

				<div className='mt-4'>
					<Terms />
				</div>
			</div>
		</>
	)
}

export default PagesHome
