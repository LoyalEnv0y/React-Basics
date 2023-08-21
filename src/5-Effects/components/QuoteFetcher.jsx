import { useState, useEffect } from 'react';

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

/*
	By default state hooks are not designed to use asynchronous functions.
	That is why we cannot call the async function of `getData` when we first
	initialize the value of quote.

	To use asynchronous functions, we use effect hooks. Effects cannot be 
	async themselves so to use an async function inside one, we define the
	function and then call it immediately.
*/
function QuoteFetcher() {
	const [quote, setQuote] = useState({ text: '', author: '' });
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetch(RANDOM_QUOTE_URL);
		const jsonData = await data.json();

		setQuote(jsonData.quote);
	};

	return (
		<>
			<h1>{quote.text}</h1>
			<h3>{quote.author}</h3>

			<button onClick={getData}>Get Quote Using Handler</button>
		</>
	);
}

export default QuoteFetcher;
