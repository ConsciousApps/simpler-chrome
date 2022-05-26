// Packages
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Elements
import Button from '~/button'
import Combobox from '~/combobox'
import Dropdown from '~/dropdown'

const DesignLayoutsTodoStartConditionalSelection = ({
	allAnyOptions,
	andOrOptions,
	dateStartPredecessors,
	setAllAnyOptions,
	setAndOrOptions,
	setEditCondition,
	setDateStartPredecessors
}) => {
	const { t } = useTranslation()

	const { todoDateStart } = useTodoCtx()

	return (
		<>
			<div className='w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4'>
				<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
					{todoDateStart && (
						<div className='w-48'>
							<Dropdown
								{...{
									multiple: false,
									optional: false,
									options: andOrOptions,
									setOptions: setAndOrOptions
								}}
							/>
						</div>
					)}

					{todoDateStart && (
						<p className='m-0 text-sm text-secondary dark:text-secondaryDark text-center'>
							{t(`I complete`)}
						</p>
					)}

					<div className='w-24'>
						<Dropdown
							{...{
								multiple: false,
								optional: false,
								options: allAnyOptions,
								setOptions: setAllAnyOptions
							}}
						/>
					</div>
				</div>

				<p className='m-0 text-sm text-secondary dark:text-secondaryDark text-center'>
					{t(`of these to-dos:`)}
				</p>

				<Combobox
					{...{
						multiple: true,
						options: dateStartPredecessors,
						setOptions: setDateStartPredecessors
					}}
				/>
			</div>

			{typeof setEditCondition === 'function' &&
				(!todoDateStart || (todoDateStart && andOrOptions.some(x => x.value))) &&
				allAnyOptions.some(x => x.value) &&
				dateStartPredecessors.some(x => x.value) && (
					<Button
						{...{
							action: () => setEditCondition(true),
							text: t(`Review`),
							tw: 'mt-4 mx-auto'
						}}
					/>
				)}
		</>
	)
}

export default DesignLayoutsTodoStartConditionalSelection
