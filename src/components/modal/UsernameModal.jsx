import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import React from 'react';
import { fetchUserData } from '../../lib/fetchUserData';
import SubmitButton from '../SubmitButton';

const UsernameModal = ({
	open,
	handleClose,
	setIsFormOpen,
	setErrorMessage,
	userName,
	setUserInputData,
}) => {
	const onSubmit = async (e) => {
		e.preventDefault();
		handleClose();
		setIsFormOpen(true);
		const userData = await fetchUserData(userName);
		setErrorMessage(userData?.message ?? '');
		setUserInputData((prevState) => ({
			...prevState,
			fullName: userData.name ?? '',
			email: userData.email ?? '',
			avatar_url: userData.avatar_url ?? '',
		}));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Github Form</DialogTitle>
			<DialogContent>
				<form id='login-form' onSubmit={onSubmit}>
					<TextField
						style={{ margin: '0.5rem' }}
						label='Username'
						required
						value={userName ?? ''}
						type='text'
						onChange={(e) =>
							setUserInputData((prevState) => ({
								...prevState,
								userName: e.target.value,
							}))
						}
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						handleClose();
						setUserInputData((prevState) => ({
							...prevState,
							userName: '',
						}));
					}}>
					Cancel
				</Button>
				<SubmitButton form='login-form' />
			</DialogActions>
		</Dialog>
	);
};

export default UsernameModal;
