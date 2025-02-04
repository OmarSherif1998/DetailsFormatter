/** @format */

import { useState } from 'react';
import formatDetails from '../functions/formatDetails ';
import FormattedDetails from './FormattedDetails';

function Form() {
	const [username, setUsername] = useState('');
	const [userDetails, setUserDetails] = useState(null);
	const [type, setType] = useState('generic');

	const handleForm = (type) => {
		setType(type);
		setUserDetails(formatDetails(username));
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen w-full '>
			<div className='flex flex-col items-center gap-5 bg-white p-6 rounded-2xl shadow-lg w-[40%]  '>
				<h2 className='text-2xl font-semibold text-gray-700 mb-4'>
					Enter The Username
				</h2>
				<input
					type='text'
					placeholder='Your name...'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
				/>
				<section className='flex justify-between gap-5'>
					<button
						className='w-fit px-7  text-sm bg-blue-600 rounded-lg text-white py-1 cursor-pointer hover:bg-blue-500'
						onClick={() => handleForm('basic')}
					>
						Generate User Details
					</button>
					<button
						className='w-fit px-5 bg-blue-600 rounded-lg text-white py-1 cursor-pointer hover:bg-blue-500'
						onClick={() => handleForm('generic')}
					>
						Generate Generic Form
					</button>
				</section>
			</div>

			{userDetails && (
				<FormattedDetails userDetails={userDetails} type={type} />
			)}
		</div>
	);
}

export default Form;
