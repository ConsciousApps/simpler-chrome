// Packages
import { useEffect } from 'react'
// Contexts
import { useCircleCtx } from '-/circle'
// Functions
import fetchApi from '#/fetch'

const HooksDesignLayoutsTodoGetCategories = ({ setCategoryOptions }) => {
	const { circleSelected } = useCircleCtx()

	useEffect(() => {
		;(async () => {
			const { data: apiCategoryGet } = await fetchApi({
				path: `/api/category/get`,
				data: {
					// --- RELATIONS ---
					Circle: circleSelected?.circleId,
					// --- FIELDS ---
					isArchived: false,
					isDraft: false
				}
			})

			if (apiCategoryGet)
				setCategoryOptions(
					apiCategoryGet.map(x => ({ id: x.name, color: x.color, label: x.name, value: false }))
				)
		})()
	}, [circleSelected?.circleId])
}

export default HooksDesignLayoutsTodoGetCategories
