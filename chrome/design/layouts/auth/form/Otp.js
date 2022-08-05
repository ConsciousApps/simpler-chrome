// Functions
import validator from '#/utils/validator'
// Elements
import Button from '~/button'
import Input from '~/input'

const DesignLayoutsAuthFormOtp = ({ code, email, mode, setCode, setSubmitCode }) => {
	return (
		<>
			<span>Please enter the 6-digit code that was just sent to {email}.</span>

			<Input
				{...{
					label: 'Code',
					name: 'code',
					onChange: ({ value }) => setCode(value),
					onKeyPress: e => {
						if (e.code === 'Enter' && validator.code(code)) {
							e.preventDefault()

							setSubmitCode(true)
						}
					},
					type: 'text',
					value: code || ''
				}}
			/>

			<Button
				{...{
					action: () => {
						if (validator.code(code)) setSubmitCode(true)
					},
					primary: true,
					text: mode === 'signin' ? 'Sign In' : 'Sign Up',
					tw: 'w-full mt-4'
				}}
			/>
		</>
	)
}

export default DesignLayoutsAuthFormOtp
