const HooksAuthSocialProviders = ({ provider, user }) =>
	[
		provider === 'apple'
			? {
					authProvider: provider,
					authUsername: null,
					email: user?.email,
					nameFirst: null,
					nameLast: null,
					profile: null
			  }
			: null,
		provider === 'discord'
			? {
					authProvider: provider,
					authUsername: user?.preferredUsername,
					email: user?.email,
					nameFirst: null,
					nameLast: null,
					profile: null
			  }
			: null,
		provider === 'facebook'
			? {
					authProvider: provider,
					authUsername: null,
					email: user?.email,
					nameFirst: user?.givenName,
					nameLast: user?.familyName,
					profile: user?.picture?.data?.url
			  }
			: null,
		provider === 'github'
			? {
					authProvider: provider,
					authUsername: user?.profile?.replace(`https://github.com/`, ``),
					email: user?.email,
					nameFirst: user?.name?.split(' ')[0],
					nameLast: user?.name?.split(' ')[1],
					profile: user?.picture
			  }
			: null,
		provider === 'google'
			? {
					authProvider: provider,
					authUsername: null,
					email: user?.email,
					nameFirst: user?.givenName,
					nameLast: user?.familyName,
					profile: user?.picture
			  }
			: null,
		provider === 'twitter'
			? {
					authProvider: provider,
					authUsername: user?.preferredUsername,
					email: user?.email,
					nameFirst: user?.name?.split(' ')[0],
					nameLast: user?.name?.split(' ')[1],
					profile: user?.profile
			  }
			: null,
		{
			authProvider: provider,
			authUsername: null,
			email: user?.email,
			nameFirst: null,
			nameLast: null,
			profile: null
		}
	].find(x => x)

export default HooksAuthSocialProviders
