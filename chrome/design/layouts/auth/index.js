// Packages
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// Contexts
import { useAuthCtx } from '-/auth'
import { useLoadingCtx } from '-/loading'
// Hooks
import useHandleAuthStage from '=/auth/handleAuthStage'
import useStandAlone from '=/screen/standAlone'
// Layouts
import Form from '^/auth/Form'
import Divider from '^/auth/Divider'
import HomeScreen from '^/auth/HomeScreen'
import Note from '^/auth/Note'
import Onboard from '^/auth/onboard'
import Providers from '^/auth/Providers'
import Terms from '^/auth/terms'
// Elements
import Modal from '~/modal'
import Loading from '~/loading'

const DesignLayoutsAuth = () => {
	const { t } = useTranslation()

	const { authStage, setAuthStage } = useAuthCtx()

	const { loading } = useLoadingCtx()

	const [openModal, setOpenModal] = useState(false)

	useHandleAuthStage({ openModal, setOpenModal })

	const { data: isStandAlone } = useStandAlone()

	return (
		<Modal
			{...{
				close: () => {
					setOpenModal(false)

					// Delay auth state setting so that modal content doesn’t change before it’s closed
					setTimeout(() => setAuthStage(null), 300)
				},
				isOpen: openModal
			}}
		>
			<h3>
				{authStage === 'signin' && <>{t(`Sign into`)} simpler.</>}

				{authStage === 'signup' && <>{t(`Create a free account`)}</>}
			</h3>

			{!loading && (authStage === 'signin' || authStage === 'signup') && (
				<>
					{!isStandAlone && <Form />}

					{isStandAlone && <HomeScreen />}

					{!isStandAlone && <Divider />}

					<Providers />

					{isStandAlone && <Note />}

					<Terms />
				</>
			)}

			{!loading && authStage === 'onboard' && <Onboard {...{ setOpenModal }} />}

			{loading && (
				<div className='relative h-96 flex justify-center items-center'>
					<Loading />
				</div>
			)}
		</Modal>
	)
}

export default DesignLayoutsAuth
