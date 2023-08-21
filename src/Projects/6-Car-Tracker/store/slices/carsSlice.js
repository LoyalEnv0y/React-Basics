import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		entries: []
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},

		addCar(state, action) {
			state.entries.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid()
			});
		},

		removeCar(state, action) {
			state.entries = state.entries.filter((c) => c.id !== action.payload);
		}
	}
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;