import { useState } from 'react';

// States let react to know when to rerender the component.
// When a component function is executed the component is rerendered.
// React ignores the initial value of the state after the first render.
// The value of the state is updated after the component is rerendered.
function Counter() {
	// [var, func] = useState(startingState)
	const [count, setCount] = useState(0);
	const [emoji, setEmoji] = useState('🥵');

	return (
		<>
			<p>COUNT: {count}</p>
			<span>{emoji}</span>
			<button
				onClick={() => {
					setCount((c) => c + 1);
					setEmoji(() => (count % 2 == 1 ? '🥶' : '🥵'));
				}}
			>
				Click!
			</button>
		</>
	);
}

export default Counter;
