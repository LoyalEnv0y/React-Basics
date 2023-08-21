function CheckBox({ handleToggle, item }) {
	return (
		<input
			type="checkbox"
			checked={item.completed}
			onChange={handleToggle}
		/>
	);
}

export default CheckBox;
