export const fetchUserData = async (userName) => {
	const response = await fetch(`https://api.github.com/users/${userName}`, {
		method: 'GET',
	});
	const userData = await response.json();
	return userData;
};