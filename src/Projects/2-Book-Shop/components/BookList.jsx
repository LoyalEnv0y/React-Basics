import BookShow from './BookShow';
import BooksContext from '../context/books';
import { useContext } from 'react';

function BookList() {
	const { books } = useContext(BooksContext);

	if (!books.length) {
		return (
			<h2 className="no-books">
				You don't have any books in your list. Add some to display 📕
			</h2>
		);
	}

	return (
		<div className="book-list">
			{books.map((b) => (
				<BookShow
					key={b.id}
					book={b}
				/>
			))}
		</div>
	);
}

export default BookList;
