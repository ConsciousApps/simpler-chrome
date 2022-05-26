// Packages
import React from 'react'
// Global CSS
import '@/output.css'
// Providers
import { AuthProvider } from '-/auth'
import { CircleProvider } from '-/circle'
import { LoadingProvider } from '-/loading'
import { TodoProvider } from '-/todo'

const PagesApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<LoadingProvider>
				<CircleProvider>
					<TodoProvider>
						<Component {...pageProps} />
					</TodoProvider>
				</CircleProvider>
			</LoadingProvider>
		</AuthProvider>
	)
}

export default PagesApp
