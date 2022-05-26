// Functions
import magicGetToken from '#/auth/magic/getToken'
import magicLogout from '#/auth/magic/logout'

const LibFetch = async ({ authRequired = true, data, isSWR, path }) => {
	const token = await magicGetToken()

	if (!path || (authRequired && !token)) return { data: null }

	data = data
		? {
				...data,
				// --- SYSTEM ---
				timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
		  }
		: null

	const response = await fetch(path, {
		method: data ? 'POST' : 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : {})
		},
		...(data && { body: JSON.stringify(data) })
	})

	const res = await response.json()

	if (res?.error) {
		if (res.error === 'not_signed_in') await magicLogout()

		throw res.error
	}

	return isSWR ? res.data : res
}

export default LibFetch
