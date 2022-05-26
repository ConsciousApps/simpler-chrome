// Packages
import React from 'react'
// Global CSS
import '@/output.css'
// Providers
import { AuthProvider } from '-/auth'
import { LoadingProvider } from '-/loading'
import { TodoProvider } from '-/todo'

const PagesApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<LoadingProvider>
				<TodoProvider>
					<Component {...pageProps} />
				</TodoProvider>
			</LoadingProvider>
		</AuthProvider>
	)
}

export default PagesApp
