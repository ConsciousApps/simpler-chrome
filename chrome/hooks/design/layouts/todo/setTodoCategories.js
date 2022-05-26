// Packages
import { useState, useEffect } from 'react'
// Contexts
import { useTodoCtx } from '-/todo'

const HooksDesignLayoutsTodoSetTodoCategories = ({ categoryOptions }) => {
	const { setTodoCategories } = useTodoCtx()

	const [hasLoaded, setHasLoaded] = useState(false)

	useEffect(() => {
		if (categoryOptions?.length && hasLoaded)
			setTodoCategories(categoryOptions.filter(x => x.value))
		else setHasLoaded(true)
	}, [categoryOptions])
}

export default HooksDesignLayoutsTodoSetTodoCategories
