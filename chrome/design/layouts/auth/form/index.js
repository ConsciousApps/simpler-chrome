// Packages
import { useState } from 'react'
// Hooks
import useSignInViaEmail from '=/signInViaEmail'
// Layouts
import Email from '^/auth/form/Email'
import Otp from '^/auth/form/Otp'

const DesignLayoutsAuthForm = ({ mode }) => {
	const [email, setEmail] = useState(null)
	const [submit, setSubmit] = useState(false)
	const [stage, setStage] = useState('email')

	useSignInViaEmail({ email, setStage, submit })

	if (stage === 'email') return <Email {...{ email, mode, setEmail, setSubmit }} />
	else if (stage === 'otp') return <Otp />

	return null
}

export default DesignLayoutsAuthForm
