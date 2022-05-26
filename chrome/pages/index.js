// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CollectionIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Auth from '^/auth'
import QuickAdd from '^/todo/quick'
// Elements
import Button from '~/button'
import ButtonSmall from '~/button/small'
// Styles
import twText from '@/text'

const PagesHome = () => {
	const { t } = useTranslation()

	const { authUser, setAuthStage } = useAuthCtx()

	const [quickAdd, setQuickAdd] = useState(true)
	const [quickAddTodo, setQuickAddTodo] = useState(null)

	useIsSignedIn()

	useSignout()

	return (
		<div className='p-4'>
			{!authUser && <Auth />}

			{authUser && quickAdd && <QuickAdd {...{ quickAdd, setQuickAdd, setQuickAddTodo }} />}

			{authUser && !quickAdd && (
				<div>
					<h3>{t(`Congrats!`)} 🎉</h3>

					<div className='text-sm'>
						You just added <span className={twText({ type: 'alert' })}>{quickAddTodo}</span> to your
						to-do list.
					</div>

					<Button
						{...{
							action: () => setQuickAdd(true),
							primary: true,
							text: t(`Add another to-do`),
							tw: 'w-full mt-8'
						}}
					/>

					<div className='flex justify-center mt-4'>
						<ButtonSmall
							{...{
								action: () => window.open(process.env.NEXT_PUBLIC_APP_DOMAIN, '_system'),
								Icon: CollectionIcon,
								text: t(`See your list`)
							}}
						/>
					</div>
				</div>
			)}

			{authUser && (
				<div className='flex justify-center mt-4'>
					<ButtonSmall
						{...{
							action: () => setAuthStage('signout'),
							Icon: LogoutIcon,
							text: t(`Sign out`)
						}}
					/>
				</div>
			)}
		</div>
	)
}

export default PagesHome
