import { Button } from '@mui/material';
import React from 'react'

const SubmitButton = ({ form }) => {
	return (
		<Button variant='contained' form={form} type='submit'>
			Submit
		</Button>
	);
};

export default SubmitButton