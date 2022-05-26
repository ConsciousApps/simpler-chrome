// Packages
import tinydate from 'tinydate'

const LibDatesLibDatesDateTimeShort = date => {
	if (typeof window !== 'undefined') {
		const stamp = tinydate('{WWW}, {MMM} {DD} at {time}', {
			WWW: d =>
				d.toLocaleString(window?.navigator?.language, { weekday: 'short' }).replace(/\./, ''),
			MMM: d => d.toLocaleString(window?.navigator?.language, { month: 'short' }).replace(/\./, ''),
			DD: d => d.getDate(),
			time: d =>
				d
					.toLocaleString(window?.navigator?.language, {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true
					})
					.replace(/:00 /, ' ')
					.replace(/\./g, '')
		})

		return stamp(date)
	}

	return null
}

export default LibDatesLibDatesDateTimeShort
