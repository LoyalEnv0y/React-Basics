import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

/*
	====================================== 🎭 ======================================
	When there is an incoming request from the client to the server, we need to
	show a loading state before the data comes. This is where the isLoading state
	comes in handy. As a reminder Reducers should always be synchronous.

	If there are any errors in the way, we need to show those errors instead of the
	data. This is where error state comes in handy.
	
	Finally when the server sends in the data we need, we need to show that data.
	As you guest it this is where the data state comes in handy.

	====================================== 🥁 ======================================
	When the request is made to the server, Async Thunk Function will automatically
	dispatch an action during data fetching. 
	
	This action will have a type of 'pending' meaning the data hasn't come in yet.
	We will configure the `usersSlice` to watch for this action. While the action
	type is set to 'pending' we will set the `isLoading` state to true.
	
	Once the data comes in from the server, the Thunk Function will update it's 
	action type to be 'fulfilled'. At this point we will set the `isLoading` to
	false and `data` to the incoming data. The data will be stored in the payload
	of action.

	If at any point an error occurs, the Thunk Function will update it's state to
	be 'rejected'. We will set `isLoading` state to false and set the `error` state
	to the error that was thrown. The error will be stored in the payload of action.

	====================================== 👂 ======================================
	After creating the Async Thunk Functions (look at the fetchUsers.js file) we
	need to import the function and listen for the 'pending', 'rejected' and 
	'fulfilled' types. Instead of manually writing these types as 
	`users/fetch/pending`, we can reference them on the returned object created by
	the function.
*/

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		isLoading: false,
		error: null,
		data: []
	},
	extraReducers(builder) {
		// Fetching All Users 
		builder.addCase(fetchUsers.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});

		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});

		// Adding a User
		builder.addCase(addUser.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(addUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});

		builder.addCase(addUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data.push(action.payload);
		});

		// Deleting a User
		builder.addCase(removeUser.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(removeUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});

		builder.addCase(removeUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = state.data.filter((user) => user.id !== action.payload.id);
		});
	}
});

export const usersReducer = usersSlice.reducer;