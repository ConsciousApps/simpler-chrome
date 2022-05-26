// Packages
import tinydate from 'tinydate'

const LibDatesLibDatesTimeStamp = date => {
	const stamp = tinydate('{HH}{mm} {A}', {
		HH: d => (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()),
		mm: d => {
			if (d.getMinutes() === 0) return ''
			if (d.getMinutes() < 10) return `:0${d.getMinutes()}`
			return `:${d.getMinutes()}`
		},
		A: d => (d.getHours() >= 12 ? 'pm' : 'am')
	})

	return stamp(date)
}

export default LibDatesLibDatesTimeStamp
