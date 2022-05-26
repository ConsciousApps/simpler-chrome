// Packages
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./pages/**/*.js', './design/**/*.js'],
	darkMode: 'class',
	theme: {
		colors: {
			// Brand
			brand1: colors.fuchsia[700],
			brand1Dark: colors.fuchsia[600],
			brand2: colors.pink[600],
			brand2Dark: colors.pink[600],
			// Text
			primary: colors.gray[700],
			primaryDark: colors.gray[300],
			secondary: colors.gray[500],
			secondaryDark: colors.gray[400],
			tertiary: colors.gray[400],
			tertiaryDark: colors.gray[600],
			// Text: special use cases
			alert: colors.red[700],
			alertDark: colors.red[500],
			disabled: colors.gray[200],
			disabledDark: colors.gray[500],
			inverted: colors.white,
			invertedDark: colors.gray[800],
			// HTML
			bgPrimary: colors.gray[200],
			bgPrimaryDark: colors.gray[900],
			bgSecondary: colors.gray[100], // must be 1 notch above or below `background`
			bgSecondaryDark: colors.gray[800], // must be [800]
			line: colors.gray[300],
			lineDark: colors.gray[500],
			// Other
			transparent: 'transparent',
			white: colors.white,
			black: colors.black
		},
		cursor: {
			pointer: 'pointer',
			grab: 'grab',
			notAllowed: 'not-allowed'
		},
		extend: {
			backgroundImage: {
				loading: "url('/assets/images/general/loading-small.svg')"
			}
		},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans]
		},
		screens: {
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		zIndex: {
			1000: 1000,
			2000: 2000,
			3000: 3000,
			4000: 4000,
			5000: 5000,
			6000: 6000,
			7000: 7000,
			8000: 8000,
			9000: 9000,
			10000: 10000
		}
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				p: {
					color: theme('colors.primary'),
					margin: '0.5rem 0rem 1rem 0rem',
					fontWeight: '400',
					textAlign: 'left',
					fontSize: '1.25rem',
					lineHeight: '1.75rem',
					'@media (min-width: 768px)': {
						fontSize: '1rem',
						lineHeight: '1.5rem'
					}
				},
				h1: {
					color: theme('colors.brand1'),
					fontWeight: 800,
					fontSize: '3rem',
					lineHeight: '3.5rem',
					margin: '0.5rem 0rem 1rem 0rem',
					textAlign: 'center',
					'@media (min-width: 768px)': {
						fontSize: '3.5rem',
						lineHeight: '4rem'
					},
					'@media (min-width: 1024px)': {
						fontSize: '4rem',
						lineHeight: '4.5rem'
					}
				},
				h2: {
					color: theme('colors.brand1'),
					fontWeight: 900,
					fontSize: '2rem',
					lineHeight: '2.5rem',
					margin: '0.5rem 0rem 1rem 0rem',
					textAlign: 'center',
					'@media (min-width: 768px)': {
						fontSize: '3rem',
						lineHeight: '3.5rem'
					},
					'@media (min-width: 1024px)': {
						fontSize: '3.5rem',
						lineHeight: '4rem'
					}
				},
				h3: {
					color: theme('colors.primary'),
					fontWeight: 700,
					fontSize: '1.5rem',
					lineHeight: '2rem',
					margin: '0.5rem 0rem 1rem 0rem',
					textAlign: 'center',
					'@media (min-width: 768px)': {
						fontSize: '1.75rem',
						lineHeight: '2.25rem'
					}
				},
				h4: {
					color: theme('colors.primary'),
					margin: '0.5rem 0rem 1rem 0rem',
					fontWeight: 500,
					fontSize: '1.25rem',
					lineHeight: '1.75rem',
					'@media (min-width: 768px)': {
						fontSize: '1.5rem',
						lineHeight: '2rem'
					}
				},
				h5: {
					color: theme('colors.primary'),
					margin: '0.5rem 0rem 1rem 0rem',
					fontWeight: 600,
					fontSize: '1.rem',
					lineHeight: '1.25rem',
					'@media (min-width: 768px)': {
						fontSize: '1rem',
						lineHeight: '1.25rem'
					}
				},
				h6: {
					color: theme('colors.primary'),
					margin: '0.5rem 0rem 1rem 0rem',
					fontWeight: 600,
					fontSize: '1.25rem',
					lineHeight: '1.5rem',
					textTransform: 'uppercase',
					'@media (min-width: 768px)': {
						fontSize: '1rem',
						lineHeight: '1.25rem'
					}
				}
			})
		}),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
}
