// Functions
import validator from '#/utils/validator'
// Elements
import Button from '~/button'
import Input from '~/input'

const DesignLayoutsAuthFormEmail = ({ email, mode, setEmail, setSubmitEmail }) => (
	<>
		<Input
			{...{
				label: 'Email',
				name: 'email',
				onChange: ({ value }) => setEmail(value),
				onKeyPress: e => {
					if (e.code === 'Enter' && validator.email(email)) {
						e.preventDefault()

						setSubmitEmail(true)
					}
				},
				type: 'email',
				value: email || ''
			}}
		/>

		<Button
			{...{
				action: () => {
					if (validator.email(email)) setSubmitEmail(true)
				},
				disabled: !validator.email(email),
				primary: true,
				text: mode === 'signin' ? 'Sign In' : 'Sign Up',
				tw: 'w-full mt-4'
			}}
		/>
	</>
)

export default DesignLayoutsAuthFormEmail
