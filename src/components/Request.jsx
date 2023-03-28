import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { countDayDifference } from '../lib/logic-service';
import '../styles/Application.scss';

const Request = ({ data, contentRef }) => {
	const dayDifference =
		data && countDayDifference(data.startDate, data.finalDate) + 1;

	return (
		data && (
			<Box className='request' ref={contentRef}>
				<h2 className='heading'>Шаблон заявки</h2>
				<Box className='appeal'>
					<Box className='user'>
						<Avatar src={data.avatar_url} sx={{ width: 100, height: 100 }} />
						<Typography>{data.userName}</Typography>
					</Box>
					<Typography className='text'>
						Директору ТОВ "Панда-Груп" <br />
						Іванову В.М. <br />
						{data.position.label} <br />
						{data.fullName}
					</Typography>
				</Box>
				<Box>
					<Typography className='request'>Заява</Typography>
					<Box className='request-content'>
						<Typography>
							Прошу надати мені відпустку в період {data.startDate} -{' '}
							{data.finalDate} року в кількості {dayDifference}
						</Typography>
						{dayDifference > 1 ? (
							<Typography>календарних днів.</Typography>
						) : (
							<Typography>календарного дня.</Typography>
						)}
						<Typography>
							В період відпустки мої контакти за якими буду в доступності:
						</Typography>
						<Typography>Мій номер телефону: {data.phoneNumber}</Typography>
						<Typography>Моя ел. адреса: {data.email}</Typography>
					</Box>
				</Box>
			</Box>
		)
	);
};

export default Request;
