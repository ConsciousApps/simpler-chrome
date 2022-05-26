// Packages
import { useEffect } from 'react'

const HooksDesignLayoutsTodoSaveDuration = ({ options, setValue }) => {
	useEffect(() => {
		if (options?.find(x => x.value)) setValue(options?.find(x => x.value)?.id)
	}, [JSON.stringify(options)])
}

export default HooksDesignLayoutsTodoSaveDuration
