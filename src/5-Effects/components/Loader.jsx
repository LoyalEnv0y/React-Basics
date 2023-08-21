import { useState, useEffect } from 'react';

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

/*
	By default state hooks are not designed to use asynchronous functions.
	That is why we cannot call the async function of `getData` when we first
	initialize the value of quote.

	To use asynchronous functions, we use effect hooks.
*/
function QuoteFetcher() {
	const [quote, setQuote] = useState({ text: '', author: '' });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(RANDOM_QUOTE_URL);
			const jsonData = await data.json();

			setQuote(jsonData.quote);
			setIsLoading(false);
		};

		getData();
	}, []);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			<h1>{quote.text}</h1>
			<h3>{quote.author}</h3>
		</>
	);
}

export default QuoteFetcher;
