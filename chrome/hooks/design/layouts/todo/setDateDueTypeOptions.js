// Packages
import { useEffect } from 'react'

const HooksDesignLayoutsTodoSetDateDueTypeOptions = ({ date, setDateDueTypeOptions }) => {
	useEffect(
		() =>
			setDateDueTypeOptions(prev => [
				...prev
					.filter(x => x.id !== 'someday')
					.map(x => ({
						...x,
						disabled: date ? false : true,
						selected: date && x.id === 'hard' ? true : false
					})),
				{
					...prev.find(x => x.id === 'someday'),
					disabled: date ? true : false,
					selected: date ? false : true
				}
			]),
		[date]
	)
}

export default HooksDesignLayoutsTodoSetDateDueTypeOptions
