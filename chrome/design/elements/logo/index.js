// Packages
import { useRouter } from 'next/router'

const ElementsLogo = () => {
	const router = useRouter()

	return (
		<div className={`w-40 mx-auto cursor-pointer`} onClick={() => router.push('/')}>
			<img
				alt='simpler'
				src={'/assets/images/logo.png'}
				width={1500}
				height={400}
				objectFit='contain'
			/>
		</div>
	)
}

export default ElementsLogo
