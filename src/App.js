import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import UsernameModal from './components/modal/UsernameModal';
import VacationModal from './components/modal/VacationModal';
import Request from './components/Request';
import { addDays } from './lib/logic-service';
import { saveToPDF } from './lib/saveToPDF';

function App() {
	const defaultUserInput = {
		startDate: new Date().toISOString().split('T')[0],
		finalDate: addDays(new Date()),
		position: { label: '', value: '' },
		email: '',
		phoneNumber: '',
		fullName: '',
	};
	const [userName, setUserName] = useState('');
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
	const [userData, setUserData] = useState(null);
	const [userInputData, setUserInputData] = useState(defaultUserInput);
	const [formData, setFormData] = useState(null);
	const contentRef = useRef(null);

	useEffect(() => {
		formData && saveToPDF(contentRef);
	}, [formData]);

	const onSubmit = (e) => {
		e.preventDefault();
		const { fullName, ...other } = userInputData;
		const trimmedName = fullName.trim();
		setIsFormOpen(false);
		setFormData({
			userName,
			avatar_url: userData?.avatar_url,
			fullName: trimmedName,
			...other,
		});
		setUserInputData(defaultUserInput);
		setUserData(null);
		setUserName('');
	};

	const handleClose = () => {
		setIsFormOpen(false);
		setUserName('');
		setUserData(null);
		setUserInputData(defaultUserInput);
	};

	return (
		<div className='App'>
			<Button variant='contained' onClick={() => setIsLoginFormOpen(true)}>
				Create vacation
			</Button>
			<Request data={formData} contentRef={contentRef} />
			<UsernameModal
				open={isLoginFormOpen}
				handleClose={() => {
					setIsLoginFormOpen(false);
				}}
				setIsFormOpen={setIsFormOpen}
				setUserData={setUserData}
				userName={userName}
				setUserName={setUserName}
				setUserInputData={setUserInputData}
			/>
			<VacationModal
				open={isFormOpen}
				handleClose={handleClose}
				userName={userName}
				userData={userData}
				onSubmit={onSubmit}
				userInputData={userInputData}
				setUserInputData={setUserInputData}
			/>
		</div>
	);
}

export default App;

