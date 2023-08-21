import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
	====================================== 📝 ======================================
	When the Async Thunk is created the first parameter will be a string for what
	is being fetched. This is called a base type.

	Base types produce a type for the action they dispatch when a request goes to
	a server. These types can be pending, rejected and fulfilled depending on the
	state of the request.

	The types of action look like this => 
	`users/fetch/pending` || `users/fetch/rejected` || `users/fetch/fulfilled`

	====================================== 🛠️ ======================================
	The second argument that is passed to the Async Thunk is an async function that
	catches some data and returns it. The returned object also includes whatever
	data that came from the server as well as some additional properties to keep
	track of the type of function such as 'pending', 'rejected', 'fulfilled'
*/
const fetchUsers = createAsyncThunk('users/fetch', async () => {
	const response = await axios.get('http://localhost:3001/users');

	// DEV ONLY
	await pause(100);
	return response.data;
});

// DEV ONLY
const pause = (milliseconds) => {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
};

export { fetchUsers };