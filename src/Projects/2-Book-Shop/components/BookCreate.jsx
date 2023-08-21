import { useContext, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import BooksContext from '../context/books';

function BookCreate() {
	const { addBook } = useContext(BooksContext);
	const [name, setName] = useState('');

	const handleChange = (evt) => {
		setName(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBook(name);
		setName('');
	};

	return (
		<div className="book-create">
			<h3>Add a Book value</h3>

			<form onSubmit={handleSubmit}>
				<label htmlFor="book-name">Title:</label>
				<input
					id="book-name"
					className="input"
					type="text"
					value={name}
					onChange={handleChange}
				/>
				<button className="button">
					<SendIcon />
				</button>
			</form>
		</div>
	);
}

export default BookCreate;
