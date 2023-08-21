import { createContext, useState } from 'react';

const CounterContext = createContext();

function Provider({ children }) {
	const [count, setCount] = useState(0);

	const valueToShare = {
		count,
		setCount,
		incCount: () => setCount(count + 1),
	};

	return (
		<CounterContext.Provider value={valueToShare}>
			{children}
		</CounterContext.Provider>
	);
}

export default CounterContext;
export { Provider };
