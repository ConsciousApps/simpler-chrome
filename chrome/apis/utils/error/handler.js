const ApisUtilsErrorHandler = ({ code, file, res }) => {
	console.error({ code, file })

	return res ? res.json({ error: code }) : { error: code }
}

export default ApisUtilsErrorHandler
