const DesignElementsButtonGroup = ({ buttons, disabled, setButtons }) => (
	<span className='relative z-0 inline-flex rounded-lg'>
		{buttons?.map((x, i) => (
			<div
				key={x.label}
				onClick={() =>
					!disabled && !x.disabled
						? setButtons(prev =>
								[
									...prev.filter(y => y.label !== x.label).map(y => ({ ...y, selected: false })),
									{ ...x, selected: true }
								].sort((a, b) => (a.sortOrder < b.sortOrder ? -1 : 1))
						  )
						: null
				}
				className={`${i === 0 ? 'rounded-l-lg' : '-ml-px'} ${
					i === buttons.length - 1 ? 'rounded-r-lg' : ''
				} relative inline-flex items-center ${
					disabled || x.disabled
						? 'cursor-not-allowed bg-disabled dark:bg-disabledDark border-disabled dark:border-disabledDark'
						: 'cursor-pointer'
				} text-primary dark:text-primaryDark px-4 py-1.5 border border-opacity-50 text-sm ${
					x.selected
						? 'z-1000 outline-none text-inverted bg-brand1 dark:bg-brand1Dark border-brand1 dark:border-brand1Dark'
						: `border-line`
				}`}
			>
				{x.label}
			</div>
		))}
	</span>
)

export default DesignElementsButtonGroup
