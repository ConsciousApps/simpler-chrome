// Packages
import { useState } from 'react'
// Hooks
import useSendOtp from '=/sendOtp'
import useVerifyOtp from '=/verifyOtp'
// Layouts
import Email from '^/auth/form/Email'
import Otp from '^/auth/form/Otp'

const DesignLayoutsAuthForm = ({ mode, stage, setStage }) => {
	const [code, setCode] = useState(null)
	const [email, setEmail] = useState(null)
	const [submitEmail, setSubmitEmail] = useState(false)
	const [submitCode, setSubmitCode] = useState(null)

	useSendOtp({ email, setStage, submitEmail })

	useVerifyOtp({ code, submitCode })

	if (stage === 'email') return <Email {...{ email, mode, setEmail, setSubmitEmail }} />

	if (stage === 'otp') return <Otp {...{ code, email, setCode, setSubmitCode }} />

	return null
}

export default DesignLayoutsAuthForm
