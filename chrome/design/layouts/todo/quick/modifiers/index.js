// Packages
import { useTranslation } from 'react-i18next'
import { ClockIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/solid'
// Contexts
import { useTodoCtx } from '-/todo'
// Elements
import Toggle from '~/toggle'

const DesignLayoutsTodoQuickModifiers = ({}) => {
	const { t } = useTranslation()

	const { setTodoIsImportant, setTodoIsTimeSensitive, todoIsImportant, todoIsTimeSensitive } =
		useTodoCtx()

	return (
		<div className='my-8 flex justify-evenly w-full'>
			<Toggle
				{...{
					icon: <FireIcon className='h-5 w-5' aria-hidden='true' />,
					large: false,
					setValue: setTodoIsImportant,
					text: t(`Important`),
					value: todoIsImportant
				}}
			/>

			<Toggle
				{...{
					icon: <ClockIcon className='h-5 w-5' aria-hidden='true' />,
					large: false,
					setValue: setTodoIsTimeSensitive,
					text: t(`Time-Sensitive`),
					value: todoIsTimeSensitive
				}}
			/>
		</div>
	)
}

export default DesignLayoutsTodoQuickModifiers
