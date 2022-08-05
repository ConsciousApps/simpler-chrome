// Packages
import { useEffect } from 'react'
import { useSignIn } from '@clerk/nextjs'

const HooksSendOtp = ({ email, setStage, submitEmail }) => {
	const { signIn } = useSignIn()

	useEffect(() => {
		if (email && submitEmail) {
			const sendOtp = async () => {
				const signInAttempt = await signIn.create({ identifier: email })

				const emailCodeFactor = signInAttempt.supportedFirstFactors.find(
					factor => factor.strategy === 'email_code'
				)

				await signInAttempt.prepareFirstFactor({
					strategy: 'email_code',
					email_address_id: emailCodeFactor.email_address_id
				})

				setStage('otp')
			}

			sendOtp()
		}
	}, [submitEmail])
}

export default HooksSendOtp
