import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

// This slice is for controlling the inputs for adding a new car.
const formSlice = createSlice({
	name: 'form',
	initialState: {
		name: '',
		cost: 0
	},
	reducers: {
		changeName(state, action) {
			state.name = action.payload;
		},

		changeCost(state, action) {
			state.cost = action.payload;
		}
	},

	extraReducers: (builder) => {
		builder.addCase(addCar, (state) => {
			state.name = '';
			state.cost = 0;
		});
	}
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;