// This is how we do it normally
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUser, fetchUsers } from '../store';
// import Skeleton from './Skeleton';
// import Button from './Button';

// function UsersList() {
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(fetchUsers());
// 	}, [dispatch]);

// 	const handleUserAdd = () => {
// 		dispatch(addUser());
// 	};

// 	const {
// 		data: users,
// 		isLoading,
// 		error,
// 	} = useSelector((state) => {
// 		return state.users;
// 	});

// 	if (isLoading) {
// 		return <Skeleton times={6} className="h-10 w-full" />;
// 	}

// 	if (error) {
// 		return (
// 			<>
// 				<h2>An Error Occurred 🙀</h2>
// 				<p>Error: {error.message}</p>
// 			</>
// 		);
// 	}

// 	const renderedUsers = users.map((u) => {
// 		return (
// 			<div key={u.id} className="mb-2 border rounded">
// 				<div className="flex p-2 justify-between items-center cursor-pointer">
// 					{u.name}
// 				</div>
// 			</div>
// 		);
// 	});

// 	return (
// 		<>
// 			<div className="flex flex-row justify-between m-3">
// 				<h1 className="m-2 text-xl">Users</h1>
// 				<Button onClick={handleUserAdd} primary rounded>
// 					+ Add User
// 				</Button>
// 			</div>
// 			{renderedUsers}
// 		</>
// 	);
// }

// export default UsersList;

// This is to use fine-grained loading. This is tedious. RTK does this better.
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { useThunk } from '../hooks/useThunk';
import UsersListItem from './UsersListItem';

function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
	const [doAddUser, isAddingUser, addUserError] = useThunk(addUser);

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doAddUser();
	};

	const { data: users } = useSelector((state) => {
		return state.users;
	});

	let content;

	if (isLoadingUsers) {
		content = <Skeleton times={6} className="h-10 w-full" />;
	} else if (loadingUsersError) {
		content = <h2>An Error Occurred 🙀</h2>;
	} else {
		content = users.map((u) => {
			return <UsersListItem key={u.id} user={u} />;
		});
	}

	return (
		<>
			<div className="flex flex-row justify-between items-center m-3">
				<h1 className="m-2 text-xl">Users</h1>

				<Button
					onClick={handleUserAdd}
					primary
					rounded
					loading={isAddingUser}
				>
					+ Add User
				</Button>

				{addUserError && 'Error creating user...'}
			</div>
			{content}
		</>
	);
}

export default UsersList;
