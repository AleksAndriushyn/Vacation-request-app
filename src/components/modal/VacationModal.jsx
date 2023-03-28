import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import React from 'react';
import UserForm from '../form/UserForm';

const VacationModal = ({
	open,
	handleClose,
	userName,
	userData,
	onSubmit,
	userInputData,
	setUserInputData,
}) => {
	return (
		<Dialog fullWidth onClose={handleClose} open={open}>
			<DialogTitle>Vacation Form</DialogTitle>
			<DialogContent>
				<UserForm
					userName={userName}
					userData={userData}
					onSubmit={onSubmit}
					userInputData={userInputData}
					setUserInputData={setUserInputData}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button variant='contained' form='user-form' type='submit'>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default VacationModal;
