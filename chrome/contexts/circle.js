// Packages
import { createContext, useState, useContext } from 'react'

const Context = createContext(null)

export const CircleProvider = ({ children }) => {
	const [circles, setCircles] = useState([])
	const [circleSelected, setCircleSelected] = useState(null)

	return (
		<Context.Provider
			{...{
				value: {
					circles,
					circleSelected,
					setCircleSelected,
					setCircles
				}
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useCircleCtx = () => useContext(Context)
