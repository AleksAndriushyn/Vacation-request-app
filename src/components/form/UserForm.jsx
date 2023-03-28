import React from 'react';
import FormContent from './FormContent';
import FormHead from './FormHead';

const UserForm = ({
	onSubmit,
	userName,
	userData,
	userInputData,
	setUserInputData,
}) => {
	const updateUserInputData = (key) => {
		return (e) => {
			setUserInputData((prevState) => ({
				...prevState,
				[key]: e.target.value,
			}));
		};
	};

	return (
		<form id='user-form' onSubmit={onSubmit}>
			<FormHead
				userName={userName}
				avatar={userData?.avatar_url}
				errorMessage={userData?.message}
			/>
			<FormContent
				userInputData={userInputData}
				setUserInputData={setUserInputData}
				updateUserInputData={updateUserInputData}
			/>
		</form>
	);
};

export default UserForm;
