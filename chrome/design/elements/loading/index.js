// Contexts
import { useLoadingCtx } from '-/loading'

const ElementsLoading = () => {
	const { loading } = useLoadingCtx()

	if (!loading) return null

	return (
		<div className={`absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center`}>
			<img src='/assets/images/general/animation.gif' className='w-20 h-20' />
		</div>
	)
}

export default ElementsLoading
