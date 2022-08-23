// Packages
import React from 'react'
import { ClerkProvider as ClerkProviderWeb } from '@clerk/nextjs'
import { ClerkProvider as ClerkProviderExtension } from '=/ClerkProvider'
// Global CSS
import '@/output.css'

export default ({ Component, pageProps }) => {
	const appearance = {
		variables: {
			colorPrimary: '#a21caf',
			borderRadius: '4px'
		},
		layout: {
			socialButtonsVariant: 'iconButton',
			socialButtonsPlacement: 'bottom'
		},
		elements: {
			rootBox: 'w-screen m-0 p-0 max-w-none flex justify-center',
			card: 'w-full m-0 max-w-none shadow-none',
			'signIn-root': 'max-w-none w-full',
			logoBox: 'mx-auto',
			headerSubtitle: 'hidden',
			identityPreview: 'mx-auto',
			formFieldInput: `border-line dark:border-lineDark rounded-xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand1`,
			formButtonPrimary: `bg-gradient-to-br from-brand1 dark:from-brand1Dark to-brand2 dark:to-brand2Dark rounded-full h-12 normal-case text-base`,
			socialButtonsIconButton: 'rounded-xl',
			otpCodeFieldInputs: 'w-full flex justify-between gap-2',
			otpCodeFieldInput: `text-xl border-b-line dark:border-lineDark focus:rounded focus:ring-brand1 focus:ring-2 focus:border-transparent focus:outline-none w-full p-0 m-0 h-12`
		}
	}

	if (process.env.ENV === 'prd')
		return (
			<ClerkProviderExtension {...{ appearance, ...pageProps }}>
				<Component />
			</ClerkProviderExtension>
		)

	return (
		<ClerkProviderWeb {...{ appearance, ...pageProps }}>
			<Component />
		</ClerkProviderWeb>
	)
}
