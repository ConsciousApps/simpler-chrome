const DesignStylesInput = ({ disabled, error, type }) => {
	const bg = [
		type === 'large' ? 'bg-white dark:bg-bgSecondaryDark' : null,
		'bg-white dark:bg-bgSecondaryDark'
	].find(x => x)

	const styleType = [
		type === 'large' ? 'pl-3 md:pl-5 pr-9 md:pr-28 py-3 md:py-8 text-2xl md:text-3xl' : null,
		'h-10 px-3 py-2 text-base md:text-sm shadow-xs'
	].find(x => x)

	const styleDisabled = disabled
		? ' text-disabled dark:text-disabledDark border-disabled dark:border-disabledDark'
		: ` text-primary dark:text-primaryDark placeholder-secondary dark:placeholder-secondaryDark border-line dark:border-lineDark focus:border-brand1 dark:focus:border-brand1Dark focus:ring-brand1 dark:focus:ring-brand1Dark`

	const styleError = error
		? ' pr-10 text-alert dark:text-alertDark placeholder-alert dark:placeholder-alertDark border-alert dark:border-alertDark focus:border-alert dark:focus:border-alertDark focus:ring-alert dark:focus:ring-alertDark'
		: ''

	return `focus:outline-none block w-full rounded-lg ${bg} ${styleType}${styleError}${styleDisabled}`
}

export default DesignStylesInput
