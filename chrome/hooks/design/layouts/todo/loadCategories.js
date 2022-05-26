// Packages
import { useState, useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoLoadCategories = ({ setCategoryOptions }) => {
	const { todoCategories } = useTodoCtx()

	const [hasLoaded, setHasLoaded] = useState(false)

	useEffect(() => {
		if (todoCategories?.length && !hasLoaded) {
			setCategoryOptions(prev =>
				prev.map(x => ({ ...x, value: todoCategories?.some(y => y.value && y.label === x.label) }))
			)

			setHasLoaded(true)
		}
	}, [todoCategories])
}

export default HooksDesignLayoutsTodoLoadCategories
