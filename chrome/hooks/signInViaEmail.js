// Packages
import { useEffect } from 'react'
import { useSignIn } from '@clerk/nextjs'

const HooksSignInViaEmail = ({ email, setStage, submit }) => {
	const { signIn } = useSignIn()

	useEffect(() => {
		if (email) {
			const sendOTP = async () => {
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

			sendOTP()
		}
	}, [submit])
}

export default HooksSignInViaEmail
