// Packages
import { useState } from 'react'
import { useRouter } from 'next/router'
// Contexts
import { useAuthCtx } from '-/auth'
// Hooks
import useHasUpdatedPhotos from '=/design/layouts/upload/hasUpdatedPhotos'
import useLoadPhoto from '=/auth/onboard/loadPhoto'
import useSavePhoto from '=/auth/onboard/savePhoto'
// Layouts
import Upload from '^/upload'
// Elements
import Button from '~/button'

const DesignLayoutsAuthOnboardingPhoto = ({ setOpenModal, setProgress, setUpdateUser }) => {
	const router = useRouter()

	const { authUser, setAuthStage } = useAuthCtx()

	const [photos, setPhotos] = useState(null)
	const [save, setSave] = useState(false)

	const defaultPhotos = [{ imageId: 0, url: '/assets/images/general/account.svg' }]

	const MIN_PHOTOS = 1,
		MAX_PHOTOS = 1

	useLoadPhoto({ defaultPhotos, save, setPhotos })

	useSavePhoto({ defaultPhotos, photos, save, setProgress, setSave, setUpdateUser })

	const { data: hasUpdatedPhotos } = useHasUpdatedPhotos({ photos, defaultPhotos })

	const isDisabled =
		!photos ||
		photos?.length < MIN_PHOTOS ||
		photos?.length > MAX_PHOTOS ||
		!photos?.every(photo => photo?.url) ||
		photos.some(photo => photo?.url === '/assets/images/general/account.svg')

	return (
		<>
			<Upload
				{...{
					defaultPhotos,
					headerNew: 'Add your profile photo',
					headerSave: 'Looks great!',
					maxPhotos: MAX_PHOTOS,
					photos,
					setPhotos,
					textNew:
						'Your profile photo will make it easier for you to find your friends on simpler and create shared to-do lists.',
					textSave:
						'This photo will be added to your profile. Be sure it accurately represents you, and that it doesn’t contain any sensitive information.',
					type: 'PROFILE'
				}}
			/>

			<Button
				{...{
					action: () => {
						if (hasUpdatedPhotos) setSave(true)
						else if (!hasUpdatedPhotos) setProgress(prev => prev + 1)
					},
					disabled: isDisabled,
					modal: true,
					primary: true,
					text: 'Continue',
					tw: 'mx-auto'
				}}
			/>

			<Button
				{...{
					action: () => {
						setOpenModal(false)

						setTimeout(() => {
							setAuthStage(null)

							if (authUser?.isNew) router.push('/tutorial')
						}, 300)
					},
					modal: true,
					text: 'Not now',
					tw: 'mt-4 mx-auto'
				}}
			/>
		</>
	)
}

export default DesignLayoutsAuthOnboardingPhoto
