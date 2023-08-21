import {
	Box,
	Typography,
	AppBar,
	IconButton,
	Toolbar,
	Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

function CustomStyles() {
	return (
		<Box
			sx={{
				border: '1px solid red',
				p: 1
			}}
		>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>

			<Typography variant="h4">Hello</Typography>
			<Typography variant="h4">World</Typography>
		</Box>
	);
}

export default CustomStyles;
