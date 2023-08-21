import { Button, Stack } from "@mui/material";

function Buttons() {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="text" onClick={console.log('Hello')}>
				Text
			</Button>
			<Button variant="contained" color="primary">
				Contained
			</Button>
			<Button variant="outlined" size="small">
				Outlined
			</Button>
		</Stack>
	);
}

export default Buttons;
