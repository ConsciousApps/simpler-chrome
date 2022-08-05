// Packages
import { useState } from 'react'
// Hooks
import useSignInViaEmail from '=/signInViaEmail'
// Functions
import validator from '#/utils/validator'
// Elements
import Button from '~/button'
import Input from '~/input'

const DesignLayoutsAuthForm = () => {
	const [email, setEmail] = useState(null)
	const [submit, setSubmit] = useState(false)

	useSignInViaEmail({ email, submit })

	return (
		<>
			<Input
				{...{
					label: 'Email',
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
					text: 'Sign up',
					tw: 'w-full mt-4'
				}}
			/>
		</>
	)
}

export default DesignLayoutsAuthForm
