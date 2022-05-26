// Global CSS
import '@/output.css'
// Providers
import { AuthProvider } from '-/auth'

const PagesApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default PagesApp
