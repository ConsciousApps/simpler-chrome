// Utilities
import utilAuthSignout from '+/utils/auth/signout'

const PagesApiAuthSignout = async (req, res) => {
	const { data: authSignout, error: authSignoutErr } = await utilAuthSignout(
		req
	)
	if (authSignoutErr) return res.json({ error: authSignoutErr })

	return res.json({ data: authSignout })
}

export default PagesApiAuthSignout
