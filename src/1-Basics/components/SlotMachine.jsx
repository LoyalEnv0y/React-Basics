function pickItem(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function SlotMachine({ items }) {
	const pickedItems = [];
	for (let i = 0; i < 3; i++) {
		pickedItems.push(pickItem(items));
	}

	const win =
		pickedItems[0] === pickedItems[1] && pickedItems[0] === pickedItems[2];

	return (
		<>
			<h2 style={{ color: win ? 'Green' : 'Red' }}>
				{win ? 'You Won 😄' : 'You Lost ☹️'}
			</h2>
			{win ? <p>Congrats!!!</p> : ''}
			<p>{pickedItems}</p>
		</>
	);
}

export default SlotMachine;
