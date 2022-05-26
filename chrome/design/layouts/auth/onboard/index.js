// Packages
import { useState } from 'react'
// Hooks
import useFindOnboardingStage from '=/auth/onboard/findOnboardingStage'
import useUserUpdate from '=/auth/onboard/userUpdate'
// Layouts
import Complete from '^/auth/onboard/Complete'
import Name from '^/auth/onboard/Name'
import Photo from '^/auth/onboard/Photo'

const DesignLayoutsAuthOnboard = ({ setOpenModal }) => {
	const [progress, setProgress] = useState(1)
	const [updateUser, setUpdateUser] = useState(null)

	const { data: pages } = useFindOnboardingStage()

	useUserUpdate({ updateUser })

	return (
		<>
			{pages.findIndex(x => x === 'name') + 1 === progress && (
				<Name {...{ setProgress, setUpdateUser }} />
			)}

			{pages.findIndex(x => x === 'photo') + 1 === progress && (
				<Photo {...{ setOpenModal, setProgress, setUpdateUser }} />
			)}

			{pages.length + 1 === progress && <Complete />}
		</>
	)
}

export default DesignLayoutsAuthOnboard
