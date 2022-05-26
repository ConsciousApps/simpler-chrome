// Packages
import { createContext, useState, useContext } from 'react'

const Context = createContext(null)

export const AuthProvider = ({ children }) => {
	const [authStage, setAuthStage] = useState(null)
	const [authToken, setAuthToken] = useState(null)
	const [authIsSignedIn, setAuthIsSignedIn] = useState(null)
	const [authUser, setAuthUser] = useState(null)

	return (
		<Context.Provider
			{...{
				value: {
					authIsSignedIn,
					authStage,
					authToken,
					authUser,
					setAuthIsSignedIn,
					setAuthStage,
					setAuthToken,
					setAuthUser
				}
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useAuthCtx = () => useContext(Context)
