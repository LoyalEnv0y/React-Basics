import { useEffect, useContext } from 'react';
import BookList from './BookList';
import BookCreate from './BookCreate';
import BooksContext from '../context/books';

function BookApp() {
	const { fetchBooks } = useContext(BooksContext);

	/* 	
		When the site first loads and when the fetchBooks function changes, fetch all
	 	the books from the mock database to begin showing books. The `fetchBooks` function
	 	will trigger a rerender of the `books` component which in return will trigger this
	 	effect to rerun, resulting in an infinite loop. To fix this issue read the comment
		at `books` file above the useCallBack hook.
	*/ 
	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);

	return (
		<div className="app">
			<h1>Reading List 📖</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default BookApp;
