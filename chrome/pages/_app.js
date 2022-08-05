// Packages
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
// Global CSS
import '@/output.css'

const PagesApp = ({ Component, pageProps }) => (
	<ClerkProvider {...pageProps}>
		<div className='w-80 mx-auto p-4'>
			<Component {...pageProps} />
		</div>
	</ClerkProvider>
)

export default PagesApp
