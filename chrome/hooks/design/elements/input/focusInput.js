// Packages
import { useEffect } from 'react'

const HooksDesignElementsInputFocusInput = ({ focus, textInput }) => {
	useEffect(() => {
		if (focus && textInput.current) textInput.current.focus()
	}, [focus])
}

export default HooksDesignElementsInputFocusInput
