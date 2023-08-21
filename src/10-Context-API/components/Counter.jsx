import { useContext } from 'react';
import CounterContext from '../context/counter';

function Counter() {
	const { count } = useContext(CounterContext);
	return <div>Count = {count}</div>;
}

export default Counter;
