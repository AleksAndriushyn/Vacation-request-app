export const addDays = (date) => {
	const res = new Date(date);
	res.setDate(res.getDate() + 13);
	return res.toISOString().split('T')[0];
};

export const countDayDifference = (startDate, finalDate) => {
	return Math.round(
		(new Date(finalDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
	);
};
