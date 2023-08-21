import { useState } from 'react';

function TextInput({ id, labelText, name, addItem }) {
	const [value, setValue] = useState('');

	const handleChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addItem(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={id}>{labelText}</label>
			<input
				id={id}
				type="text"
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</form>
	);
}

export default TextInput;
