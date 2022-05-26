// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useSignInViaEmail from '=/auth/email/signin'
// Functions
import validator from '#/utils/validator'
// Elements
import Button from '~/button'
import Input from '~/input'

const DesignLayoutsAuthForm = () => {
	const { t } = useTranslation()

	const { authStage } = useAuthCtx()

	const [email, setEmail] = useState(null)
	const [submit, setSubmit] = useState(false)

	useSignInViaEmail({ email, submit })

	return (
		<>
			<Input
				{...{
					label: t(`Email`),
					name: 'email',
					onChange: ({ value }) => setEmail(value),
					onKeyPress: e => {
						if (e.code === 'Enter' && email && validator.email(email)) {
							e.preventDefault()

							setSubmit(true)
						}
					},
					type: 'email',
					value: email || ''
				}}
			/>

			<Button
				{...{
					action: () => setSubmit(true),
					primary: true,
					text: t(`Sign up or sign in for free`),
					tw: 'w-full mt-4'
				}}
			/>
		</>
	)
}

export default DesignLayoutsAuthForm
