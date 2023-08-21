import { useState } from 'react';

function SignUpForm() {
	const [username, setUsername] = useState();
	const [passport, setPassport] = useState();

	const updateUsername = (evt) => {
		setUsername(evt.target.value);
	};

	const updatePassport = (evt) => {
		setPassport(evt.target.value);
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

			<label htmlFor="passport">Passport: </label>
			<input
				id="passport"
				type="password"
				placeholder="123@Aa.<412>"
				value={passport}
				onChange={updatePassport}
			/>
			<button>Submit</button>
		</div>
	);
}

export default SignUpForm;
