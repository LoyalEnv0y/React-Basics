import { useReducer } from 'react';
import Button from './Button';
import Panel from './Panel';
import { produce } from 'immer';

/*
	`useReducer` hooks are viable to use when there are multiple states that are 
	dependent on each other. `useReducer` is an alternative to `useState` hook.

	There are multiple steps to know when using a reducer.

	1 - State when creating a new reducer refers to the state variable.

	2 - The second parameter of `useReducer` takes in a object and this object will
		be the default value of the state.

	3 - We call dispatch when we want to change the variable value. This causes a
		rerender of the component.

	4 - When we call dispatch, React will call the `reducer` function. When the
		`reducer` function is called, react automatically passes the state as the
		first parameter, and the dispatch value as the action parameter.

	5 - Reducer functions should never return an undefined or null value. Also they
		shouldn't have any references to outside variables or should not use 
		promises or async await. Reducer functions also shouldn't update the state
		values in place and should return a new object containing all the values of
		the previous state + the updated values.

	6 - Logic should be implemented in the reducer function not the dispatch object.
*/

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const RESET = 'reset';
const INC_A_LOT = 'incALot';
const SET_VALUE_TO_ADD = 'setValueToAdd';

// Not using the IMMER library;
// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case INCREMENT_COUNT:
// 			return { ...state, count: state.count + 1 };
// 		case DECREMENT_COUNT:
// 			return { ...state, count: state.count - 1 };
// 		case RESET:
// 			return { count: 0, valueToAdd: 0 };
// 		case INC_A_LOT:
// 			return {
// 				...state,
// 				count: state.count + state.valueToAdd,
// 				valueToAdd: 0,
// 			};
// 		case SET_VALUE_TO_ADD:
// 			return { ...state, valueToAdd: action.payload };
// 		default:
// 			return state;
// 	}
// };

// Using the IMMER library
const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			state.count++;
			break;
		case DECREMENT_COUNT:
			state.count--;
			break;
		case RESET:
			state.count = state.valueToAdd = 0;
			break;
		case INC_A_LOT:
			state.count += state.valueToAdd;
			state.valueToAdd = 0;
			break;
		case SET_VALUE_TO_ADD:
			state.valueToAdd = action.payload;
			break;
	}
};

function Counter({ initialValue }) {
	// Not using the IMMER library;

	// const [state, dispatch] = useReducer(reducer, {
	// 	count: initialValue,
	// 	valueToAdd: 0,
	// });

	// Using the IMMER library
	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialValue,
		valueToAdd: 0,
	});

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT,
		});
	};

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT,
		});
	};

	const reset = () => {
		dispatch({
			type: RESET,
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch({
			type: INC_A_LOT,
		});
	};

	const handleChange = (evt) => {
		const value = parseInt(evt.target.value) || 0;

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
	};

	return (
		<Panel className="m-3 flex flex-col justify-between h-[200px]">
			<h1 className="text-lg">Current Count: {state.count}</h1>

			<div className="flex justify-between w-72">
				<Button primary rounded onClick={increment}>
					+1
				</Button>
				<Button warning rounded onClick={decrement}>
					-1
				</Button>
				<Button danger rounded onClick={reset}>
					Reset
				</Button>
			</div>

			<form onSubmit={handleSubmit}>
				<label htmlFor="count-input">Add Many!</label>
				<input
					id="count-input"
					type="number"
					onChange={handleChange}
					value={state.valueToAdd || ''}
					className="p-1 m-3 bg-gray-50 border border-gray-300"
				/>
			</form>
		</Panel>
	);
}

export default Counter;
