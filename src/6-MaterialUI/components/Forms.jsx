import {
	FormControlLabel,
	Switch,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import { useState } from 'react';

function Forms() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		age: 0,
		agreeTOS: false,
		workField: 'frontend',
	});
	const handleChange = (evt) => {
		const field = evt.target.name;
		const value = evt.target.value;
		setFormData((curData) => ({ ...curData, [field]: value }));
	};
	const handleSwitchChange = (evt) => {
		setFormData((curData) => ({
			...curData,
			agreeTOS: evt.target.checked,
		}));
	};

	return (
		<form>
			<TextField
				id="firstName"
				label="First Name"
				placeholder="Adam"
				type="text"
				name="firstName"
				variant="outlined"
				value={formData.firstName}
				onChange={handleChange}
			/>
			<TextField
				id="lastName"
				label="Last Name"
				placeholder="Smith"
				type="text"
				name="lastName"
				variant="outlined"
				value={formData.lastName}
				onChange={handleChange}
			/>
			<TextField
				id="age"
				label="Age"
				type="number"
				name="age"
				variant="outlined"
				value={formData.age}
				onChange={handleChange}
			/>
			<br />
			<FormControlLabel
				control={<Switch defaultChecked />}
				label="Agree TOS"
				value={formData.agreeTOS}
				onChange={handleSwitchChange}
				required
			/>

			<FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="workFieldLabel">Work Field</InputLabel>
				<Select
					labelId="workFieldLabel"
					id="workField"
					name="workField"
					label="Work Field"
					value={formData.workField}
					onChange={handleChange}
				>
					<MenuItem value="frontend">Front End</MenuItem>
					<MenuItem value="backend">Back End</MenuItem>
					<MenuItem value="fullstack">Fullstack</MenuItem>
				</Select>
			</FormControl>
		</form>
	);
}

export default Forms;
