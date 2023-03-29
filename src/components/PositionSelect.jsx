import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const PositionSelect = ({ positionValue, setUserInputData }) => {
	const positions = [
		{ label: 'Розробник', value: 'DEV' },
		{ label: 'Проект менеджер', value: 'PM' },
		{ label: 'Тестувальник', value: 'TEST' },
		{ label: 'Дизайнер', value: 'DES' },
		{ label: 'Начальник', value: 'CEO' },
	];
	return (
		<FormControl required>
			<InputLabel>Position</InputLabel>
			<Select
				label='Position'
				value={positionValue}
				onChange={(e) =>
					setUserInputData((prevState) => ({
						...prevState,
						position: positions.find(
							(position) => position.value === e.target.value
						),
					}))
				}>
				{positions.map((position) => (
					<MenuItem key={position.value} value={position.value}>
						{position.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default PositionSelect;
