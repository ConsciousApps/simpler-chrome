// Packages
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
// Global CSS
import '@/output.css'
// Languages
import 'lang'

const PagesApp = ({ Component, pageProps }) => (
	<ClerkProvider {...pageProps}>
		<Component {...pageProps} />
	</ClerkProvider>
)

export default PagesApp
