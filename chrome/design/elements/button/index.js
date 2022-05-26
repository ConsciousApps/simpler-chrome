// Styles
import twButton from '@/button'

const DesignElementsButton = ({
	action,
	active,
	alert,
	disabled,
	Icon,
	items,
	light,
	loading,
	modal,
	primary,
	tw,
	text
}) => {
	const buttonStyle = twButton({
		action,
		alert,
		disabled,
		dropdown: items?.length,
		Icon,
		light,
		modal,
		primary,
		style: tw,
		text: !Icon && text
	})

	return (
		<div className={items?.length ? 'inline-flex' : 'block'}>
			<button
				{...{
					'aria-label': text,
					className: buttonStyle,
					onClick: !disabled ? action : null,
					type: 'button'
				}}
			>
				{loading && (
					<div className='w-8 h-6 -ml-2 mr-2 bg-loading bg-cover bg-no-repeat bg-center' />
				)}

				{!text && Icon && (
					<Icon
						className={`flex-none w-7 h-7 m-2 ${[
							primary ? 'text-white dark:text-white' : null,
							disabled && !primary ? 'text-tertiary dark:text-tertiaryDark' : null,
							active && !primary ? 'text-brand1 dark:text-brand1Dark' : null,
							'text-primary dark:text-primaryDark hover:text-brand1 dark:hover:text-brand1Dark'
						].find(x => x)}`}
						aria-hidden='true'
					/>
				)}

				{!Icon && text}
			</button>

			{items?.length && <ButtonDropdown {...{ disabled, light, items, tw }} />}
		</div>
	)
}

export default DesignElementsButton
