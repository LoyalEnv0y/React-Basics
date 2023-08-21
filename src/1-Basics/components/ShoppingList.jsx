import ShoppingListItem from './ShoppingListItem';

function ShoppingList({ items }) {
	return (
		<ul>
			{items.map((i) => (
				<ShoppingListItem key={i._id} item={i} />
			))}
		</ul>
	);
}

export default ShoppingList;
