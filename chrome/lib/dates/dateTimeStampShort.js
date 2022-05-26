// Packages
import tinydate from 'tinydate'
// Functions
import naturalTime from '#/dates/naturalTime'

const LibDatesLibDatesDateTimeStampShort = date => {
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

		return `${stamp(new Date(date))} (${naturalTime(new Date(date))})`
	}

	return null
}

export default LibDatesLibDatesDateTimeStampShort
