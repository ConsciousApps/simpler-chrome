// Packages
import { useMemo } from 'react'

const HooksDesignElementsDatetimeConfigureButtons = ({ handler, setValue, value }) =>
	useMemo(
		() => [
			...(value
				? [
						{
							text: 'Clear',
							handler: e => {
								setValue(null)

								if (handler) handler.close()
							}
						}
				  ]
				: []),
			'set',
			'cancel'
		],
		[value]
	)

export default HooksDesignElementsDatetimeConfigureButtons
