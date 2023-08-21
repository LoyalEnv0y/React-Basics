import axios from 'axios';
import { createContext, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

const BooksContext = createContext();

const DEFAULT_IMG =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzRGkvN9WVysP2_3AbXtdgTegy9mEELt2yFirxQymBg&s';

function Provider({ children }) {
	const [books, setBooks] = useState([]);

	/*
		`useCallBack` hook takes two parameters. One is a callback function to run and the second
		is the dependency array. The purpose of using a useCallBack is to remember function
		definitions between rerenders. Here, we are defining a function inside `useCallback` and 
		we are giving it an empty dependency array to tell react to remember this function.
		This allows us to use `fetchBooks` function as a dependency to a `useEffect` even if it
		is called inside it and not cause an infinite rerender loop.
	*/
	const fetchBooks = useCallback(async () => {
		const response = await axios.get('http://localhost:3001/books');
		setBooks(response.data);
	}, []);

	const addBook = async (bookName) => {
		// Create a new book
		const newBook = {
			name: bookName,
			img: DEFAULT_IMG,
			id: uuid(),
		};
		newBook.img = `https://picsum.photos/seed/${newBook.id}/300/200`;

		// Add the new book to the mock database
		const response = await axios.post('http://localhost:3001/books', {
			...newBook,
		});

		// Add the new book to the state and cause a rerender
		setBooks([...books, response.data]);
	};

	const editBook = async (id, newTitle) => {
		const response = await axios.patch(
			`http://localhost:3001/books/${id}`,
			{
				name: newTitle,
			}
		);

		setBooks(
			books.map((b) => (b.id === id ? { ...b, ...response.data } : b))
		);
	};

	const deleteBook = async (id) => {
		// Delete the book from the mock database
		await axios.delete(`http://localhost:3001/books/${id}`);

		// Delete the book from the state and cause a rerender.
		setBooks(books.filter((b) => b.id !== id));
	};

	const valueToShare = {
		books,
		addBook,
		editBook,
		deleteBook,
		fetchBooks,
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;
