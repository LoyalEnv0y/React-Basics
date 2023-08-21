import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function StarRating() {
	const [value, setValue] = useState(0);

	return (
		<>
			<Typography component="legend">Controlled</Typography>
			<Rating
				size="large"
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
		</>
	);
}

export default StarRating;
