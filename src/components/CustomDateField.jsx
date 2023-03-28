import { TextField } from '@mui/material';
import React from 'react';

const CustomDateField = ({
	helperText,
	onChange,
	value,
	label,
	inputProps,
	error,
}) => {
	return (
		<TextField
			value={value}
			onChange={onChange}
			label={label}
			type='date'
			required
			InputLabelProps={{ shrink: true }}
			InputProps={{
				inputProps,
			}}
			variant='standard'
			error={error}
			helperText={helperText}
		/>
	);
};

export default CustomDateField;
