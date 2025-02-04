/** @format */

const formatDetails = (name) => {
	if (!name) return null; // Handle empty input

	const arr = name.trim().split(' ');
	const firstName = arr[0] || '';
	const lastName = arr[1] || '';
	const email = `${firstName}.${lastName}@Delaval.com`;

	let userId = '';
	let i = 0;

	while (i < 4) {
		userId += lastName[i];
		i++;
	}

	i = 0; // Reset i for the firstName loop
	while (i < 2) {
		userId += firstName[i];
		i++;
	}
	userId = userId.toLowerCase();
	return { userId, name, email };
};

export default formatDetails;
