import BookApp from './components/BookApp';
import { Provider } from './context/books';

function App() {
	return (
		<Provider>
			<BookApp />
		</Provider>
	);
}

export default App;
