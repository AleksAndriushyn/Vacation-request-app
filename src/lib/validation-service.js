import { countDayDifference } from './logic-service';

export const validateDates = (startDate, finalDate) => {
	if (new Date(finalDate) < new Date(startDate)) {
		return 'Final date should be greater than start date';
	}
	const difference = countDayDifference(startDate, finalDate);
	if (difference > 13) return 'Max amount of days is 14';
	return;
};

export const validateFullName = (fullName) => {
	const regLatin = /^[a-zA-Z\s]+$/;
	const hasLatin = regLatin.test(fullName);
	if (!hasLatin) {
		return 'The name must be Latin';
	}
	return;
};

export const validatePhone = (phoneNumber) => {
	const phoneRegex = /^\+38\s0\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
	if (!phoneRegex.test(phoneNumber)) return 'Invalid phone number';
	return;
};

export const validateEmail = (email) => {
	const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailRegex.test(email)) return 'Invalid email';
	return;
};
