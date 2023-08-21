import { useState } from 'react';
import Images from './components/Images';
import SearchBar from './components/SearchBar';

function App() {
	const [searchTerm, setSearchTerm] = useState('Cars');
	const updateTerm = (newTerm) => {
		setSearchTerm(newTerm);
	};

	return (
		<div>
			<SearchBar updateTerm={updateTerm} />
			<Images searchTerm={searchTerm} />
		</div>
	);
}
export default App;
