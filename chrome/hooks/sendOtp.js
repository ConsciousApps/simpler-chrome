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

				try {
					await signInAttempt.prepareFirstFactor({
						strategy: 'email_code',
						emailAddressId: emailCodeFactor.emailAddressId
					})

					setStage('otp')
				} catch (err) {
					console.error(err)
				}
			}

			sendOtp()
		}
	}, [submitEmail])
}

export default HooksSendOtp
