import { useState } from 'react';

function genGameBoard() {
	console.log('Making the board!');
	return Array(5000);
}

function Dumbo() {
	/*
		When using a function for the state initialization, if you execute it
		like => `useState(func())` it will run every time the component gets
		rerendered. Instead just pass the function and do not call it.
		like => `useState(func)` this will still call the function in the first
		render but stop calling it afterwards.

		In case you need to pass a parameter to the function you are calling,
		use the functional way like => `useState(() => func(param))`
	*/
	const [game, setGame] = useState(genGameBoard);

	return (
		<>
			<p>Length: {game.length}</p>
			<button onClick={() => setGame('Hello')}>
				Click me to change state
			</button>
		</>
	);
}

export default Dumbo;
