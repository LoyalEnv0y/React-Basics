function Die({sides = 6}) {
	const randNumber = Math.floor(Math.random() * sides) + 1;
	return <p>{sides} Sided dice: {randNumber}</p>;
	
}

export default Die;