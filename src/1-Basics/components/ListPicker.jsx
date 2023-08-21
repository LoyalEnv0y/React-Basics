function ListPicker({ values }) {
	const randIndex = Math.floor(Math.random() * values.length);

	return (
		<div>
			<p>Random value: {values[randIndex]}</p>
		</div>
	);
}

export default ListPicker;
