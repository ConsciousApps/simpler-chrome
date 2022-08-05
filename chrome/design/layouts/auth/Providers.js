// Layouts
import Provider from '^/auth/Provider'
import { faApple, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

const DesignLayoutsAuthProviders = () => {
	const providers = [
		{ name: 'Google', icon: faGoogle },
		{ name: 'Apple', icon: faApple },
		{ name: 'GitHub', icon: faGithub }
	]

	return (
		<>
			<div className='grid grid-cols-3 gap-3'>
				{providers.map((provider, i) => i <= 2 && <Provider {...{ key: i, provider }} />)}
			</div>

			<div className='mt-3 grid grid-cols-3 gap-3'>
				{providers.map((provider, i) => i > 2 && <Provider {...{ key: i, provider }} />)}
			</div>
		</>
	)
}

export default DesignLayoutsAuthProviders
