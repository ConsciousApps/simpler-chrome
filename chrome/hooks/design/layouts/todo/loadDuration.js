// Packages
import { useEffect } from 'react'

const HooksDesignLayoutsTodoLoadDuration = ({ options, setOptions, value }) => {
	useEffect(() => {
		if (value && !options?.find(x => x.id === value))
			setOptions(prev => prev.map(x => ({ ...x, value: x.id === value })))
	}, [value])
}

export default HooksDesignLayoutsTodoLoadDuration
