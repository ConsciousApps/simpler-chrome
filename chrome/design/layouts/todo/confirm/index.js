// Packages
import { useTranslation } from 'react-i18next'
import { CollectionIcon } from '@heroicons/react/solid'
// Elements
import Button from '~/button'
import ButtonSmall from '~/button/small'
// Styles
import twText from '@/text'

const DesignLayoutsTodoConfirm = ({ quickAddTodo, setQuickAdd }) => {
	const { t } = useTranslation()

	return (
		<>
			<h3>{t(`Congrats!`)} 🎉</h3>

			<div className='text-sm'>
				You just added <span className={twText({ type: 'alert' })}>{quickAddTodo}</span> to your
				to-do list.
			</div>

			<Button
				{...{
					action: () => setQuickAdd(true),
					primary: true,
					text: t(`Add another to-do`),
					tw: 'w-full mt-8'
				}}
			/>

			<div className='flex justify-center mt-4'>
				<ButtonSmall
					{...{
						action: () => window.open(process.env.NEXT_PUBLIC_APP_URL, '_system'),
						Icon: CollectionIcon,
						text: t(`See your list`)
					}}
				/>
			</div>
		</>
	)
}

export default DesignLayoutsTodoConfirm
