// Packages
import { useState, createContext, useContext } from 'react'

const Context = createContext(null)

export const LoadingProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)

	return <Context.Provider {...{ value: { loading, setLoading } }}>{children}</Context.Provider>
}

export const useLoadingCtx = () => useContext(Context)
