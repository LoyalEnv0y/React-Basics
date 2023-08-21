import { configureStore } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "./slices/formSlice";
import { addCar, carsReducer, changeSearchTerm, removeCar } from "./slices/carsSlice";

const store = configureStore({
	reducer: {
		form: formReducer,
		cars: carsReducer
	}
});

export {
	store,
	changeCost,
	changeName,
	addCar,
	removeCar,
	changeSearchTerm
};