// Packages
import { formatDistance } from 'date-fns'

const LibDatesNaturalTime = date => {
	if (Number.isNaN(new Date(date).getTime())) return null

	let timeGap = formatDistance(date, new Date(), [{ addSuffix: true }])?.replace(' about', '')

	timeGap = timeGap.replace('about', '').replace('minutes', 'mins').replace('hours', 'hrs')

	timeGap = timeGap.charAt(0) === ' ' ? timeGap?.slice(1) : timeGap

	return new Date() > date ? `${timeGap} ago` : `in ${timeGap}`
}

export default LibDatesNaturalTime
