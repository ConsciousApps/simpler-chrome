// Packages
import tinydate from 'tinydate'

const LibDatesLibDatesDateShort = date => {
	if (typeof window !== 'undefined') {
		const stamp = tinydate('{WWW}, {MMM} {DD}, {YYYY}', {
			WWW: d =>
				d.toLocaleString(window?.navigator?.language, { weekday: 'short' }).replace(/\./, ''),
			MMM: d => d.toLocaleString(window?.navigator?.language, { month: 'short' }).replace(/\./, ''),
			DD: d => d.getDate(),
			YYYY: d => d.getFullYear()
		})

		return stamp(date)
	}

	return null
}

export default LibDatesLibDatesDateShort
