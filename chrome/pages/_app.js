// Packages
import React from 'react'
// Global CSS
import '@/output.css'
import '@/mobiscroll.react.min.css'
// Providers
import { AuthProvider } from '-/auth'
import { CircleProvider } from '-/circle'
import { LoadingProvider } from '-/loading'
import { TodoProvider } from '-/todo'
// Languages
import 'lang'

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
