// Packages
import { useTranslation } from 'react-i18next'
// Elements
import Combobox from '~/combobox'
import Dropdown from '~/dropdown'

const DesignLayoutsTodoQuickDropdowns = ({
	categoryOptions,
	durationOptions,
	setCategoryOptions,
	setDurationOptions
}) => {
	const { t } = useTranslation()

	return (
		<div className='my-4 flex justify-between gap-4'>
			<Dropdown
				{...{
					multiple: false,
					optional: false,
					options: durationOptions,
					placeholder: t(`Duration`),
					setOptions: setDurationOptions
				}}
			/>

			<Combobox
				{...{
					multiple: true,
					options: categoryOptions,
					placeholder: t(`Categories`),
					setOptions: setCategoryOptions
				}}
			/>
		</div>
	)
}

export default DesignLayoutsTodoQuickDropdowns
