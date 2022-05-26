// Packages
import React from 'react'
// Global CSS
import '@/output.css'
// Providers
import { AuthProvider } from '-/auth'
import { LoadingProvider } from '-/loading'

const PagesApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<LoadingProvider>
				<Component {...pageProps} />
			</LoadingProvider>
		</AuthProvider>
	)
}

export default PagesApp
