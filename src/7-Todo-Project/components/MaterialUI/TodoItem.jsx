import {
	Checkbox,
	FormControlLabel,
	IconButton,
	ListItem,
	ListItemText,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ item, deleteItem, toggleItem }) {
	return (
		<ListItem className={'todo-item'}>
			<FormControlLabel
				control={
					<Checkbox checked={item.completed} onChange={toggleItem} />
				}
				label={<ListItemText primary={item.content} />}
			/>

			<IconButton aria-label="delete" onClick={deleteItem}>
				<DeleteIcon fontSize="inherit" />
			</IconButton>
		</ListItem>
	);
}

export default TodoItem;
