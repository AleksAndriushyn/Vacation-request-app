import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import '../../styles/FormHead.scss';

const FormHead = ({ userName, avatar, errorMessage }) => {
	return (
		<Box>
			<Box className='user'>
				<Avatar
					alt='user'
					variant='square'
					src={avatar}
					sx={{ width: 80, height: 80 }}
				/>
				<Typography>{userName}</Typography>
				{errorMessage && <p className='error'>{errorMessage}</p>}
			</Box>
		</Box>
	);
};

export default FormHead;
