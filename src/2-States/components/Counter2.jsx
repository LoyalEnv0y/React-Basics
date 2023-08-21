import { useState } from 'react';

function Counter2() {
	const [count, setCount] = useState(0);

	const addOne = () => {
		setCount((curCount) => (curCount += 1));
	};

	const addThree = () => {
		setCount((curCount) => (curCount += 3));
	};

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={addOne}>+1</button>
			<button onClick={addThree}>+3</button>
		</>
	);
}

export default Counter2;
