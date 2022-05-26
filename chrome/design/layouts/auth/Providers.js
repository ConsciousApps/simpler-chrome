// Layouts
import Provider from '^/auth/Provider'

const DesignLayoutsAuthProviders = () => {
	const providers = ['Google', 'Apple', 'Facebook', 'Twitter', 'GitHub', 'Discord']

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
