import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
	name: 'movie',
	initialState: [],
	// Mini reducers
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},

		removeMovie(state, action) {
			const idx = state.indexOf(action.payload);
			state.splice(idx, 1);
		}
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

export const { addMovie, removeMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;