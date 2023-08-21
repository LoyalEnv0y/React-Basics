import { Provider } from 'react-redux';
import MainPage from './pages/MainPage';
import { store } from './store';
import 'bulma/css/bulma.css';

function App() {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	);
}

export default App;
