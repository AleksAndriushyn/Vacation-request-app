import { Box, TextField } from '@mui/material';
import React from 'react';
import { addDays } from '../../lib/logic-service';
import {
	validateDates,
	validateEmail,
	validateFullName,
	validatePhone,
} from '../../lib/validation-service';
import '../../styles/FormContent.scss';
import CustomDateField from '../CustomDateField';
import PhoneMaskInput from '../PhoneMaskInput';
import PositionSelect from '../PositionSelect';

const FormContent = ({ userInputData, setUserInputData }) => {
	const updateUserInputData = (key) => {
		return (e) => {
			setUserInputData((prevState) => ({
				...prevState,
				[key]: e.target.value,
			}));
		};
	};
	return (
		<Box className='content'>
			<TextField
				value={userInputData.fullName}
				onChange={updateUserInputData('fullName')}
				error={
					userInputData.fullName && validateFullName(userInputData.fullName)
				}
				helperText={
					userInputData.fullName && validateFullName(userInputData.fullName)
				}
				label='Full Name'
				required
				type='text'
			/>
			<TextField
				value={userInputData.email}
				onChange={updateUserInputData('email')}
				label='Email'
				required
				type='email'
				error={userInputData.email && validateEmail(userInputData.email)}
				helperText={userInputData.email && validateEmail(userInputData.email)}
			/>
			<PositionSelect
				positionValue={userInputData.position.value}
				setUserInputData={setUserInputData}
			/>
			<TextField
				value={userInputData.phoneNumber}
				onChange={updateUserInputData('phoneNumber')}
				InputProps={{
					inputComponent: PhoneMaskInput,
					inputProps: {
						pattern: '[+][0-9]{2} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}',
					},
				}}
				InputLabelProps={{ shrink: true }}
				label='Phone number'
				type='tel'
				variant='standard'
				required
				error={
					userInputData.phoneNumber && validatePhone(userInputData.phoneNumber)
				}
				helperText={
					userInputData.phoneNumber && validatePhone(userInputData.phoneNumber)
				}
			/>
			<CustomDateField
				value={userInputData.startDate}
				onChange={updateUserInputData('startDate')}
				label='Start date'
				inputProps={{
					min: new Date().toISOString().split('T')[0],
				}}
			/>
			<CustomDateField
				value={userInputData.finalDate}
				onChange={updateUserInputData('finalDate')}
				label='Final date'
				inputProps={{
					min: userInputData.startDate,
					max: addDays(userInputData.startDate),
				}}
				error={validateDates(userInputData.startDate, userInputData.finalDate)}
				helperText={validateDates(
					userInputData.startDate,
					userInputData.finalDate
				)}
			/>
		</Box>
	);
};

export default FormContent;
