const LibStorageRemove = name => {
	if (typeof window !== 'undefined' && name) window.localStorage.removeItem(`simpler:${name}`)
}

export default LibStorageRemove
