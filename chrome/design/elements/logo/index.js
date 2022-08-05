// Packages
import { useRouter } from 'next/router'
import Image from 'next/image'

const ElementsLogo = () => {
	const router = useRouter()

	return (
		<div className={`w-40 mx-auto cursor-pointer`} onClick={() => router.push('/')}>
			<Image
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
