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
		userName:'',
		startDate: new Date().toISOString().split('T')[0],
		finalDate: addDays(new Date()),
		position: { label: '', value: '' },
		email: '',
		phoneNumber: '',
		fullName: '',
	};
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [userInputData, setUserInputData] = useState(defaultUserInput);
	const [formData, setFormData] = useState(null);
	const contentRef = useRef(null);

	useEffect(() => {
		formData && saveToPDF(contentRef);
	}, [formData]);

	const onSubmit = (e) => {
		e.preventDefault();
		const { fullName, ...rest } = userInputData;
		const trimmedName = fullName.trim();
		setIsFormOpen(false);
		setFormData({
			fullName: trimmedName,
			...rest,
		});
		setUserInputData(defaultUserInput);
		setErrorMessage('');
	};

	const handleClose = () => {
		setIsFormOpen(false);
		setErrorMessage('');
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
				setErrorMessage={setErrorMessage}
				userName={userInputData.userName}
				setUserInputData={setUserInputData}
			/>
			<VacationModal
				open={isFormOpen}
				handleClose={handleClose}
				errorMessage={errorMessage}
				onSubmit={onSubmit}
				userInputData={userInputData}
				setUserInputData={setUserInputData}
			/>
		</div>
	);
}

export default App;










