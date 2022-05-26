// Packages
import { useState } from 'react'
// Hooks
import useSaveNameToDB from '=/auth/onboard/saveNameToDB'
// Elements
import Button from '~/button'
import Input from '~/input'
// Styles
import twText from '@/text'

const DesignLayoutsAuthOnboardingName = ({ setProgress, setUpdateUser }) => {
	const [nameFirst, setNameFirst] = useState(null)
	const [nameLast, setNameLast] = useState(null)
	const [nameHasBeenSet, setNameHasBeenSet] = useState(false)

	useSaveNameToDB({ nameHasBeenSet, nameFirst, nameLast, setProgress, setUpdateUser })

	return (
		<>
			<h3>Please enter your name</h3>

			<div className='flex flex-col md:flex-row gap-2'>
				<div>
					<Input
						{...{
							label: 'First name',
							name: 'nameFirst',
							onChange: ({ value }) => setNameFirst(value || null),
							tab: true,
							type: 'name',
							value: nameFirst || ''
						}}
					/>
				</div>

				<div className='my-0 md:my-4' />

				<div>
					<Input
						{...{
							label: 'Last name',
							name: 'nameLast',
							onChange: ({ value }) => setNameLast(value || null),
							tab: true,
							type: 'name',
							value: nameLast || ''
						}}
					/>
				</div>
			</div>

			<Button
				{...{
					action: () => setNameHasBeenSet(true),
					disabled: !nameFirst || !nameLast,
					modal: true,
					primary: true,
					text: 'Continue',
					tw: 'mt-8 mx-auto'
				}}
			/>
		</>
	)
}

export default DesignLayoutsAuthOnboardingName
