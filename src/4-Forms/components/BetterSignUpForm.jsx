import { useState } from 'react';

/*
	To make it more practical we use an object of the input names as the starting state.
	When any input changes, the generic handleChange function fires to update the data.
*/
function BetterSignUpForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		passport: '',
	});

	/*
		This function finds what the change field is and it's value and then updates the
		corresponding field using the state object.
	*/
	const handleChange = (evt) => {
		const field = evt.target.name;
		const value = evt.target.value;

		setFormData((curData) => ({ ...curData, [field]: value }));
	};

	return (
		<form>
			<label htmlFor="firstName">First Name: </label>
			<input
				id="firstName"
				type="text"
				placeholder="Adam"
				value={formData.firstName}
				name="firstName"
				onChange={handleChange}
			/>

			<label htmlFor="lastName">Last Name: </label>
			<input
				id="lastName"
				type="text"
				placeholder="Sand"
				value={formData.lastName}
				name="lastName"
				onChange={handleChange}
			/>

			<label htmlFor="passport">Passport: </label>
			<input
				id="passport"
				type="password"
				placeholder="123@Aa.<412>"
				value={formData.passport}
				name="passport"
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	);
}

export default BetterSignUpForm;
