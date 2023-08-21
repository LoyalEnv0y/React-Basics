import { useContext, useState } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({ book }) {
	const { deleteBook } = useContext(BooksContext);

	const [isEditing, setIsEditing] = useState(false);

	const handleSubmit = () => {
		setIsEditing(false);
	};

	return (
		<div className="book-show">
			<div className="actions">
				<button
					className="edit"
					onClick={() => setIsEditing(!isEditing)}
				></button>
				<button
					className="delete"
					onClick={() => deleteBook(book.id)}
				></button>
			</div>
			<img src={book.img} alt="Book thumbnail" className="book-img" />

			{!isEditing ? (
				<p className="book-title">{book.name}</p>
			) : (
				<BookEdit onSubmit={handleSubmit} book={book} />
			)}
		</div>
	);
}

export default BookShow;
