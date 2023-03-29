import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import React from 'react';
import UserForm from '../form/UserForm';
import SubmitButton from '../SubmitButton';

const VacationModal = ({
	open,
	handleClose,
	errorMessage,
	onSubmit,
	userInputData,
	setUserInputData,
}) => {
	return (
		<Dialog fullWidth onClose={handleClose} open={open}>
			<DialogTitle>Vacation Form</DialogTitle>
			<DialogContent>
				<UserForm
					errorMessage={errorMessage}
					onSubmit={onSubmit}
					userInputData={userInputData}
					setUserInputData={setUserInputData}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<SubmitButton form='user-form' />
			</DialogActions>
		</Dialog>
	);
};

export default VacationModal;
