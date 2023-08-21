import { NavigationProvider } from './context/Navigation';
import GuidePage from './pages/GuidePage';

function App() {
	return (
		<NavigationProvider>
			<GuidePage />
		</NavigationProvider>
	);
}

export default App;
