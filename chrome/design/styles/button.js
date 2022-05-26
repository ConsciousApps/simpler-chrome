const DesignStylesButton = ({
	alert,
	disabled,
	Icon,
	light,
	mobile,
	primary,
	style,
	text
} = {}) => {
	const cursor = disabled ? 'cursor-not-allowed' : 'cursor-pointer'

	const size = (Icon || mobile) && !text ? `rounded-full h-9 w-9` : `rounded-xl h-11 px-4`

	const type = [
		disabled && primary
			? 'text-secondary dark:text-secondaryDark bg-disabled dark:bg-disabledDark shadow-sm uppercase'
			: null,
		disabled ? 'text-disabled dark:text-disabledDark' : null,
		primary
			? 'text-white dark:text-white bg-brand1 dark:bg-brand1Dark hover:bg-brand2 dark:hover:bg-brand2Dark shadow-sm uppercase'
			: null,
		light
			? 'text-secondary dark:text-secondaryDark border-line dark:border-lineDark hover:text-white dark:hover:text-white hover:bg-brand1 dark:hover:bg-brand1Dark'
			: null,
		alert ? 'text-alert dark:text-alertDark' : null,
		'text-brand1 dark:text-brand1Dark hover:text-brand2 dark:hover:text-brand2Dark font-semibold uppercase'
	].find(x => x)

	return `flex justify-center items-center text-base font-medium tracking-wide focus:outline-none ${cursor} ${size} ${style} ${type}`
}

export default DesignStylesButton
