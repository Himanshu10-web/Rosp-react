import { SyntheticEvent } from 'react';
import { ChevronUp, CheckCircle2, XCircle } from 'lucide-react';

import cn from '../utils/cn';
import { TCelebrity } from './AccordionItem';
import calculateAge from '../utils/calculateAge';
import { useCelebState } from '../store/store';

const EditForm = ({ celeb }: { celeb: TCelebrity }) => {
	const { setIsEditing } = useCelebState();

	const submitHandler = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log('submitted');
	};

	return (
		<form
			onSubmit={submitHandler}
			className='border border-gray-600 rounded-lg px-4 py-2 text-sm'>
			<div className='flex w-full gap-4 items-center cursor-pointer text-lg'>
				<img src={celeb.picture} alt='' className='rounded-full h-12' />
				<input
					name='name'
					className='font-bold'
					value={`${celeb.first} ${celeb.last}`}></input>
				<span className='ml-auto'>
					<ChevronUp />
				</span>
			</div>

			<div
				className={cn(
					'h-auto max-h-[9999px] opacity-100 transition-all duration-300 ease-accordion-down'
				)}>
				<div className='grid grid-cols-3 my-4'>
					<div>
						<label htmlFor='age' className='text-gray-400'>
							Age
						</label>
						<p>
							<input
								type='number'
								name='age'
								id='age'
								value={calculateAge(celeb.dob)}
							/>
						</p>
					</div>
					<div>
						<label htmlFor='gender' className='text-gray-400'>
							Gender
						</label>
						<select name='gender' id='gender'>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
							<option value='transgender'>Transgender</option>
							<option value='rather-not-say'>
								Rather Not Say
							</option>
						</select>
					</div>
					<div>
						<label htmlFor='country' className='text-gray-400'>
							Country
						</label>
						<input id='country' value={celeb.country} />
					</div>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='description' className='text-gray-400'>
						Description
					</label>
					<textarea id='description' rows={5}>
						{celeb.description}
					</textarea>
				</div>
				<div className='flex justify-end gap-4 mt-4'>
					<XCircle
						className='text-red-400 hover:text-red-600 transition cursor-pointer'
						onClick={() => setIsEditing(false)}
					/>
					<button type='submit'>
						<CheckCircle2
							className='text-green-400 hover:text-green-600 transition cursor-pointer'
							onClick={() => setIsEditing(false)}
						/>
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditForm;
