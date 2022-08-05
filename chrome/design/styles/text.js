const DesignStylesText = ({
	align, // default, center, right
	appearance, // default, light, muted, color
	disabled,
	italic,
	size, // default, huge, large, small, tiny
	type, // alert, header, footer, link
	underline,
	weight // default, medium, semibold, bold, extrabold
} = {}) => {
	const aligned = [
		align === 'center' ? 'text-center' : null,
		align === 'right' ? 'text-right' : null,
		'text-left'
	].find(x => x)

	const color = [
		disabled ? 'text-disabled dark:text-disabledDark' : null,
		appearance === 'color' ? 'text-brand1 dark:text-brand1Dark' : null,
		appearance === 'light' ? 'text-inverted dark:text-invertedDark' : null,
		appearance === 'muted' ? 'text-tertiary dark:text-tertiaryDark' : null,
		type === 'alert' || type === 'header' || type === 'link'
			? 'text-brand1 dark:text-brand1Dark'
			: null,
		'text-primary dark:text-primaryDark'
	].find(x => x)

	const decoration = [underline ? 'underline' : null, italic ? 'italic' : null, ''].find(
		x => x || x === ''
	)

	const sizing = [
		size === 'huge' ? 'text-xl' : null,
		size === 'large' ? 'text-xl md:text-lg' : null,
		size === 'small' ? 'text-sm' : null,
		size === 'tiny' ? 'text-xs' : null,
		'text-base'
	].find(x => x)

	const style = [
		weight === 'normal' ? 'font-normal' : null,
		weight === 'medium' ? 'font-medium' : null,
		weight === 'semibold' ? 'font-semibold' : null,
		weight === 'bold' ? 'font-bold' : null,
		weight === 'extrabold' ? 'font-extrabold' : null,
		'font-normal'
	].find(x => x)

	const uniqueType = [
		type === 'alert' ? 'text-sm md:text-xs leading-5' : null,
		type === 'error' ? 'text-error dark:text-errorDark text-sm md:text-xs leading-5' : null,
		type === 'footer'
			? 'text-inverted dark:text-invertedDark font-semibold text-xs leading-3 uppercase md:text-sm md:leading-4'
			: null,
		type === 'header' ? 'font-bold md:text-lg leading-5' : null,
		type === 'link' && disabled ? 'font-semibold cursor-not-allowed' : null,
		type === 'link'
			? `${
					appearance !== 'light' ? 'text-brand1 dark:text-brand1Dark' : ''
			  } font-medium cursor-pointer no-underline hover:underline`
			: null
	].find(x => x)

	return `${aligned} ${color} ${decoration} ${sizing} ${style} ${uniqueType}`
}

export default DesignStylesText
