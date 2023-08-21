import { TextField, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';

function TodoInput({ addItem }) {
	const [value, setValue] = useState('');

	const handleChange = (evt) => setValue(evt.target.value);


	const handleSubmit = (evt) => {
		evt.preventDefault();
		addItem(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit} className="a">
			<TextField
				fullWidth
				id="new-item"
				label="New Item"
				value={value}
				onChange={handleChange}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton type="submit" edge="end">
								<SendIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
}

export default TodoInput;
