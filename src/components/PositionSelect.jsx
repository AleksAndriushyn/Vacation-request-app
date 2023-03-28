import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const PositionSelect = ({ positionValue, setUserInputData }) => {
	const positions = [
		{ label: 'Developer', value: 'DEV' },
		{ label: 'Project Manager', value: 'PM' },
		{ label: 'Content Creator', value: 'CC' },
		{ label: 'Designer', value: 'DES' },
	];
	return (
		<FormControl>
			<InputLabel>Position</InputLabel>
			<Select
				label='Position'
				required
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
