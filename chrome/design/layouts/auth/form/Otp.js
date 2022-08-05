// Functions
import validator from '#/utils/validator'
// Elements
import Button from '~/button'
import Input from '~/input'

const DesignLayoutsAuthFormOtp = ({ code, email, setCode, setSubmitCode }) => (
	<>
		<span className='relative my-4 md:my-5 flex justify-center text-xs px-2 text-secondary dark:text-secondaryDark'>
			Please enter the 6-digit code that was just sent to {email}.
		</span>

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
				disabled: !validator.code(code),
				primary: true,
				text: 'Confirm',
				tw: 'w-full mt-4'
			}}
		/>
	</>
)

export default DesignLayoutsAuthFormOtp
