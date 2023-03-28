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

const UsernameModal = ({
	open,
	handleClose,
	setIsFormOpen,
	setUserData,
	userName,
	setUserName,
	setUserInputData,
}) => {
	const onSubmit = async (e) => {
		e.preventDefault();
		handleClose();
		setIsFormOpen(true);
		const userData = await fetchUserData(userName);
		setUserData(userData);
		setUserInputData((prevState) => ({
			...prevState,
			fullName: userData.name ?? '',
			email: userData.email ?? '',
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
						onChange={(e) => setUserName(e.target.value)}
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						handleClose();
						setUserName('');
					}}>
					Cancel
				</Button>
				<Button variant='contained' form='login-form' type='submit'>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UsernameModal;
