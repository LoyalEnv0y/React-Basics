import { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	const incCount = () => setCount((curCount) => (curCount += 1));

	// Below function will run every time the component is rerendered.
	useEffect(() => {
		console.log('Component rerendered');
	});

	/*
		Effects with dependencies, Below effect will only run if the `name`
		state changes. You can define multiple dependencies like `[name, count]`
	*/
	useEffect(() => {
		console.log('Name has been changed');
	}, [name]);

	// Below effect will only run the first the component renders and never again.
	useEffect(() => {
		console.log('First time!')
	}, []);

	const handleChange = (evt) => {
		setName(evt.target.value);
	};

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={incCount}>+1</button>

			{name && <p>{name}</p>}
			<form action="">
				<input type="text" value={name} onChange={handleChange} />
			</form>
		</>
	);
}

export default Counter;
