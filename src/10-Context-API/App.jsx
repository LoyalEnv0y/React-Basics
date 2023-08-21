import Button from './components/Button';
import Counter from './components/Counter';
import Heading from './components/Heading';
import { Provider } from './context/counter';

function App() {
	return (
		<>
			<Provider>
				<Heading />
				<Counter />
				<Button />
			</Provider>
		</>
	);
}
export default App;
