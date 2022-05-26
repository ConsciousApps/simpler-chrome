// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LogoutIcon } from '@heroicons/react/outline'
// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useIsSignedIn from '=/app/isSignedIn'
import useSignout from '=/auth/signout'
// Layouts
import Auth from '^/auth'
import Confirm from '^/todo/confirm'
import QuickAdd from '^/todo/quick'
// Elements
import ButtonSmall from '~/button/small'

const PagesHome = () => {
	const { t } = useTranslation()

	const { authUser, setAuthStage } = useAuthCtx()

	const [quickAdd, setQuickAdd] = useState(true)
	const [quickAddTodo, setQuickAddTodo] = useState(null)

	useIsSignedIn()

	useSignout()

	return (
		<div className='w-96 p-8'>
			{!authUser && <Auth />}

			{authUser && quickAdd && <QuickAdd {...{ quickAdd, setQuickAdd, setQuickAddTodo }} />}

			{authUser && !quickAdd && <Confirm {...{ quickAddTodo, setQuickAdd }} />}

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
