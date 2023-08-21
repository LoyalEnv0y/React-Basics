import { configureStore } from '@reduxjs/toolkit';
import { reset } from './actions';
import { addMovie, moviesReducer, removeMovie } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songsSlice';


/*
	====================================== 🍰 ======================================
	Slices are the states that will be held in our store object. Each slice will
	have a name, initialState and reducers property. 
	
	The name property is important when we need to make a dispatch call. The actual
	name of the state is determined when we configure the store. 
	
	The reducers properties are filled with mini reducer functions that modify that
	state. These mini reducers are like the switch cases of the reducer functions
	of `useReducer` hooks. Mini reducers also use the 'IMMER' library which lets us
	modify the state on the spot rather than creating a new one. Mini reducers are
	then packaged into a mega reducer to pass as a value to the store. 
	
	To get more information about the state and action of  reducer functions check
	out the comments on ../../3-Components-Guide/components/Counter.jsx.

	====================================== 🛒 ======================================
	Store is an object that holds all of our state for our entire application.
	Usually an application only has one store. We don't need to interact with the
	store directly. Instead we are going to use the 'React-Redux' library. When we
	do interact with this store directly it is because we need to debug the state.

	When creating a store we initialize the mega reducer property to encapsulate
	all of our state. In this mega reducer object the keys will be the actual names
	of states. the values will be the slice's initialState. The mega reducers add a
	pseudo URL for each mini reducer like so => songs/addSong 
	
	====================================== 🎭 ======================================
	State can be accessed with calling `getState()` on the store object. This 
	function will return all of the states of our application.
	
	====================================== 🚨 ======================================
	Dispatch is called when we want to update a state in our store. There are two
	ways to call a reducer function for the dispatch. One is to provide an object
	to the dispatch function with the type and payload properties. The other one is
	to call the reducer directly inside the dispatch function using the `actions`
	property of the slice.

	When the dispatch is called, it will look through all the mega reducers and see
	if it should care about that slice. By default it will only care about the
	slice with the given type. However we can make it so that the dispatch not only
	cares about the mini reducer of it's type but also cares about other slice's
	reducers as well. To do this we will add an extra reducer to the desired slice
	by adding a property named `extraReducers` and this property will take a 
	function with a builder parameter. Inside the function, it will make a case 
	for when to call the reducer and the reducer itself.
*/
const store = configureStore({
	reducer: {
		// mega reducers
		songs: songsReducer,
		movies: moviesReducer
	}
});

// console.log('Store => ', store);
// console.log('Original State => ', store.getState());

// store.dispatch({
// 	type: 'song/addSong',
// 	payload: 'Powerglide'
// });
// store.dispatch(songsSlice.actions.addSong('Wellerman'))

// console.log('Modified State => ', store.getState());

export {
	addSong,
	removeSong,
	addMovie,
	removeMovie,
	store,
	reset
};