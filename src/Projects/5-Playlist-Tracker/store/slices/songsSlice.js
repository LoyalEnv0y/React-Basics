import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	// Mini reducers
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},

		removeSong(state, action) {
			const idx = state.indexOf(action.payload);
			state.splice(idx, 1);
		},
	},
	extraReducers: (builder) => {
		// The reason for not just saying 'movie/reset' is to avoid typo issues.
		// You can also access the state and action properties by specifying them
		// in the addCase's callback function. Also state here refers to the slice.
		builder.addCase(reset, () => {
			return [];
		});
	}
});
// console.log('Actions => ', songsSlice.actions);

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;