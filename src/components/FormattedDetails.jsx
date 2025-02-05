/** @format */

import { useState } from 'react';
import formatPicker from '../functions/FormatPicker';

function FormattedDetails({ userDetails, type }) {
	const [copied, setCopied] = useState('');
	const handleCopy = () => {
		const format = formatPicker(
			type,
			userDetails.userId,
			userDetails.name,
			userDetails.email,
		);
		navigator.clipboard.writeText(format);
		setCopied(format);
	};
	return (
		<div className='mt-5 p-4 bg-gray-100 rounded-lg shadow-md w-96 text-center'>
			<h3 className='text-xl font-semibold text-gray-700 text-start'>
				User Details:
			</h3>
			<section className='flex flex-col bg-gray-400 rounded-lg p-4 text-white text-start '>
				<button
					className='flex justify-end cursor-pointer'
					onClick={handleCopy}
				>
					<svg
						width='20px'
						height='20px'
						viewBox='0 0 24 24'
						fill='white'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<path
								d='M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z'
								stroke='#1C274C'
								strokeWidth='1.5'
							></path>{' '}
							<path
								opacity='0.5'
								d='M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5'
								stroke='#1C274C'
								strokeWidth='1.5'
							></path>{' '}
						</g>
					</svg>
				</button>
				<p>User ID: {userDetails.userId}</p>
				<p>Name: {userDetails.name}</p>
				<p>Email: {userDetails.email}</p>
			</section>
		</div>
	);
}

export default FormattedDetails;
