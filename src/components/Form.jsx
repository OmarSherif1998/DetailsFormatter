/** @format */

import { useState } from 'react';
import formatDetails from '../functions/formatDetails ';
import FormattedDetails from './FormattedDetails';

function Form() {
	const [username, setUsername] = useState('');
	const [userDetails, setUserDetails] = useState(null);

	const handleForm = () => {
		setUserDetails(formatDetails(username));
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen '>
			<div className='flex flex-col items-center gap-5 bg-white p-6 rounded-2xl shadow-lg w-96'>
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

				<button
					className='w-fit px-5 bg-blue-600 rounded-lg text-white py-2 cursor-pointer hover:bg-blue-500'
					onClick={handleForm}
				>
					Generate User Details
				</button>
			</div>

			{userDetails && <FormattedDetails userDetails={userDetails} />}
		</div>
	);
}

export default Form;
