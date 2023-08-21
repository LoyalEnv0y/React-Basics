import { useThunk } from '../hooks/useThunk';
import { removeUser } from '../store';
import Button from './Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
	const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);

	const handleDeleteUser = (user) => {
		doRemoveUser(user);
	};

	const header = (
		<>
			<Button
				onClick={() => handleDeleteUser(user)}
				danger
				loading={isRemovingUser}
				className={'mr-3'}
			>
				{removeUserError ? <ErrorIcon /> : <DeleteForeverIcon />}
			</Button>
			{user.name}
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<AlbumsList user={user} />
		</ExpandablePanel>
	);
}

export default UsersListItem;
