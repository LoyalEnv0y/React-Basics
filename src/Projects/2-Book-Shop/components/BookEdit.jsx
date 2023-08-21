import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookEdit({ onSubmit, book }) {
	const { editBook } = useContext(BooksContext);
	const [newTitle, setNewTitle] = useState(book.name);

	const handleChange = (evt) => {
		setNewTitle(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit();
		editBook(book.id, newTitle);
	};

	return (
		<form onSubmit={handleSubmit} className="book-edit">
			<p>{newTitle}</p>
			<input
				className="input"
				type="text"
				onChange={handleChange}
				autoFocus
			/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
