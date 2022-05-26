const LibStorageGet = name => {
	let value = null

	// If using browser
	if (typeof window !== 'undefined') {
		const item = window.localStorage.getItem(`simpler:${name}`)
			? JSON.parse(window.localStorage.getItem(`simpler:${name}`))
			: null

		if (
			// ...if item doesn’t exist...
			!item ||
			// ...or if it exists but if request occurred too long ago...
			(item.exp && new Date() > new Date(item.exp)) ||
			// ...or if user was signed into any other location...
			(item.location && item.location !== window.location.hostname)
		) {
			// ...then remove item.
			window.localStorage.removeItem(`simpler:${name}`)
		}
		// ...otherwise, return item value
		else {
			value = item.value ? item.value : item
		}
	}

	return value
}

export default LibStorageGet
