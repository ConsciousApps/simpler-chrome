// Packages
import ms from 'ms'
// Functions
import get from '#/storage/get'
import remove from '#/storage/remove'

const LibStorageSet = ({ name = 'default', expiration, value = '' }) => {
	// If using browser
	if (typeof window !== 'undefined') {
		// If token already exists, replace it.
		if (get(name)) remove(name)

		// Set token
		window.localStorage.setItem(
			`simpler:${name}`,
			JSON.stringify({
				location: window.location.hostname,
				exp: expiration ? new Date().getTime() + expiration * ms('1 hour') : null,
				value
			})
		)
	}
}

export default LibStorageSet
