// Packages
import { ClerkProvider } from '@clerk/clerk-react'

export default function CustomClerkProvider({ children, Clerk, ...rest }) {
	if (!Clerk) return null

	return (
		<ClerkProvider
			{...{
				frontendApi:
					process.env.NEXT_ENV === 'prd' ? 'simplerlist.com' : 'clerk.wise.firefly-49.lcl.dev',
				...rest
			}}
		>
			{children}
		</ClerkProvider>
	)
}
