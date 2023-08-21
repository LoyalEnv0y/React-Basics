import PlaylistPage from './pages/PlaylistPage';
import { store } from './store/index';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<Provider store={store}>
			<PlaylistPage />
		</Provider>
	);
}
