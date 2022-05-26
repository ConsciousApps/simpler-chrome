import { Magic } from 'magic-sdk'
import { OAuthExtension } from '@magic-ext/oauth'

const LibAuthMagic = key =>
	typeof window != 'undefined' &&
	new Magic(key, {
		extensions: [new OAuthExtension()],
		testMode: process.env.NEXT_PUBLIC_ENV !== 'prd'
	})

export default LibAuthMagic(process.env.NEXT_PUBLIC_MAGIC)
