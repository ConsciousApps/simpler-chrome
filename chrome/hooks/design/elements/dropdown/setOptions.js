// Packages
import { useEffect } from 'react'

const HooksDesignElementsDropdownSetOptions = ({
	multiple,
	selected,
	setOptions,
	setQuery,
	setSelected
}) => {
	useEffect(() => {
		if (selected) {
			setOptions(prev =>
				prev?.map(option => {
					// For combobox
					if (option.id === selected?.id && typeof setQuery === 'function') setQuery('')

					// For multiple-choice...
					if (multiple)
						return {
							...option,
							value: option.id === selected?.id ? !option.value : option.value
						}
					// For single-choice
					return { ...option, value: option.id === selected?.id ? !option.value : false }
				})
			)

			setSelected(false)
		}
	}, [selected])
}

export default HooksDesignElementsDropdownSetOptions
