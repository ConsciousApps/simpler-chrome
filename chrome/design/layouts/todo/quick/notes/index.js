// Packages
import { useTranslation } from 'react-i18next'
// Contexts
import { useTodoCtx } from '-/todo'
// Elements
import Input from '~/input'

const DesignLayoutsTodoQuickNotes = () => {
	const { t } = useTranslation()

	const { setTodoNotes, todoNotes } = useTodoCtx()

	return (
		<div className='my-4'>
			<Input
				{...{
					maxLength: 255,
					onChange: ({ value }) => setTodoNotes(value),
					placeholder: t(`Notes`),
					textarea: true,
					tw: 'h-16',
					value: todoNotes || ''
				}}
			/>
		</div>
	)
}

export default DesignLayoutsTodoQuickNotes
