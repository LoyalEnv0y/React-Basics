import { useState } from 'react';

/*
	When using inputs with react, we need to define an onChange function to
	tell react what to do when the input is changed.  
*/
function UsernameForm() {
	const [username, setUsername] = useState('timmy');

	const updateUsername = (evt) => {
		setUsername(evt.target.value);
	};

	return (
		<div>
			{/* Since `for` is reserved in js, we use htmlFor in react. */}
			<label htmlFor="username">Username: </label>
			<input
				id="username"
				type="text"
				placeholder="Username"
				value={username}
				onChange={updateUsername}
			/>
			<button>Submit</button>
		</div>
	);
}

export default UsernameForm;
