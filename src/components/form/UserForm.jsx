import React from 'react';
import FormContent from './FormContent';
import FormHead from './FormHead';

const UserForm = ({
	errorMessage,
	onSubmit,
	userInputData,
	setUserInputData,
}) => {
	return (
		<form id='user-form' onSubmit={onSubmit}>
			<FormHead
				userName={userInputData?.userName}
				avatar={userInputData?.avatar_url}
				errorMessage={errorMessage}
			/>
			<FormContent
				userInputData={userInputData}
				setUserInputData={setUserInputData}
			/>
		</form>
	);
};

export default UserForm;
