// Packages
import { useState, useEffect } from 'react'
import Clerk from '@clerk/clerk-js'
import { ClerkProvider as ClerkReactProvider } from '@clerk/clerk-react'
import atob from 'atob'

const KEY = '__clerk_client_jwt'

// Use chrome.storage (local or sync) to persist Clerk client JWT. More information at https://developer.chrome.com/docs/extensions/reference/storage
const createChromeStorageCache = () => ({
	saveToken: (key, token) => chrome.storage.local.set({ [key]: token }),
	getToken: key => chrome.storage.local.get(key).then(result => result[key])
})

const convertPublishableKeyToFrontendAPIOrigin = (key = '') =>
	`https://${atob(key.replace(/pk_(test|live)_/, '')).slice(0, -1)}`

export let clerk

export async function buildClerk({ key, tokenCache }) {
	if (!clerk) {
		const getToken = tokenCache.getToken
		const saveToken = tokenCache.saveToken

		console.log(`Clerk: ${key}`)

		const clerkFrontendAPIOrigin = convertPublishableKeyToFrontendAPIOrigin(key)

		console.log(`Clerk: Getting cookie for ${clerkFrontendAPIOrigin}...`)
		const clientCookie = await chrome.cookies.get({
			url: clerkFrontendAPIOrigin,
			name: '__client'
		})

		// TODO: Listen to client cookie changes and sync updates
		// https://developer.chrome.com/docs/extensions/reference/cookies/#event-onChanged

		if (clientCookie) {
			console.log('Clerk: Found client cookie from website')
			saveToken(KEY, clientCookie.value)
		}

		clerk = new Clerk(key)

		// @ts-expect-error
		clerk.__unstable__onBeforeRequest(async requestInit => {
			requestInit.credentials = 'omit'

			requestInit.url?.searchParams.append('_is_native', '1')

			const jwt = await getToken(KEY)
			requestInit.headers.set('authorization', jwt || '')
		})

		clerk.__unstable__onAfterResponse(async (_, response) => {
			const authHeader = response.headers.get('authorization')
			if (authHeader) await saveToken(KEY, authHeader)
		})
	}

	return clerk
}

export const ClerkProvider = props => {
	const { children, publishableKey, ...rest } = props

	const [clerkInstance, setClerkInstance] = useState(null)

	useEffect(() => {
		;(async () => {
			console.log('Clerk: Building instance...')
			setClerkInstance(
				await buildClerk({
					key: publishableKey || '',
					tokenCache: createChromeStorageCache()
				})
			)
		})()
	}, [])

	if (!clerkInstance) return null

	return (
		<ClerkReactProvider {...rest} Clerk={clerkInstance} standardBrowser={false}>
			{children}
		</ClerkReactProvider>
	)
}
