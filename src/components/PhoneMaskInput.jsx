import React from 'react';
import InputMask from 'react-text-mask';

const PhoneMaskInput = React.forwardRef((props, _ref) => {
	const { inputRef, ...other } = props;
	const phoneMask = [
		'+',
		'3',
		'8',
		' ',
		'0',
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
	];

	const handleMouseClick = (event) => {
		const input = event.target;
		const cursorPosition = 5;
		input.setSelectionRange(cursorPosition, cursorPosition);
	};

	return (
		<InputMask
			ref={inputRef}
			mask={phoneMask}
			guide
			showMask
			{...other}
			onClick={handleMouseClick}
		/>
	);
});

export default PhoneMaskInput;
