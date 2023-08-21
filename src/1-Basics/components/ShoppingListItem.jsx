function ShoppingListItem({ item }) {
	const style = {
		color: item.completed ? 'grey' : 'green',
		textDecoration: item.completed && 'line-through',
	};

	return (
		<li style={style}>
			{item.item} - {item.quantity}
		</li>
	);
}

export default ShoppingListItem;
