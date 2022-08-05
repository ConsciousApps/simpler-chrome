// Packages
import { useState } from 'react'
// Hooks
import useSendOtp from '=/sendOtp'
import useVerifyOtp from '=/verifyOtp'
// Layouts
import Email from '^/auth/form/Email'
import Otp from '^/auth/form/Otp'

const DesignLayoutsAuthForm = ({ mode }) => {
	const [code, setCode] = useState(null)
	const [email, setEmail] = useState(null)
	const [submitEmail, setSubmitEmail] = useState(false)
	const [submitCode, setSubmitCode] = useState(null)
	const [stage, setStage] = useState('email')

	useSendOtp({ email, setStage, submitEmail })
	useVerifyOtp({ code, setSubmitCode })

	if (stage === 'email') return <Email {...{ email, mode, setEmail, setSubmitEmail }} />
	else if (stage === 'otp') return <Otp {...{ code, email, setCode, setSubmitCode }} />

	return null
}

export default DesignLayoutsAuthForm
