const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://clerk.simplerlist.com/npm/@clerk/clerk-js@4/dist/clerk.browser.js;
  style-src 'self';
  font-src 'self';
`

const nextConfig = {
	headers: async () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Content-Security-Policy',
					value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
				}
			]
		}
	]
}

module.exports = nextConfig
