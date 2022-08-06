// Packages
import React from 'react'
import { ClerkProvider as ClerkProviderWeb } from '@clerk/nextjs'
import { ClerkProvider as ClerkProviderExtension } from '=/ClerkProvider'
// Global CSS
import '@/output.css'

const Simpler = ({ Component }) => (
	<div className='w-80 mx-auto p-4'>
		<Component />
	</div>
)

export default ({ Component, pageProps }) =>
	process.env.ENV === 'prd' ? (
		<ClerkProviderExtension {...pageProps}>
			<Simpler {...{ Component }} />
		</ClerkProviderExtension>
	) : (
		<ClerkProviderWeb {...pageProps}>
			<Simpler {...{ Component }} />
		</ClerkProviderWeb>
	)
