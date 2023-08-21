import { useContext } from 'react';
import CounterContext from '../context/counter';

function Button() {
	const { incCount } = useContext(CounterContext);
	return <button onClick={incCount}>+1</button>;
}

export default Button;
