import { useRef } from 'react';

function SearchBar({ updateTerm }) {
	const termContainer = useRef();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		updateTerm(termContainer.current.value)
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="search-term">Search: </label>
			<input
				type="text"
				name="search-term"
				id="search-term"
				ref={termContainer}
			/>
			<button style={{padding: '2px 10px', marginLeft: '5px'}}>Go</button>
		</form>
	);
}
export default SearchBar;
