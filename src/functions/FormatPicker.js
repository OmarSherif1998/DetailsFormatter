/** @format */

const formatPicker = (type, userId, name, email) => {
	const generic = `User ID: ${userId}
Name: ${name}
Phone: 
Email: ${email}

Availability for future troubleshooting/Timeframe to be contacted on:
PC name/Hostname:

Has the user had access to the application before? Y/N

When did the issue start?

Initial troubleshooting steps performed:

Screenshot attached? Y/N

Description of the issue:

Troubleshooting steps performed:`;

	const basic = `User ID: ${userId}
Name: ${name}
Phone: 
Email: ${email}`;

	if (type === 'generic') {
		return generic;
	} else {
		return basic;
	}
};

export default formatPicker;
