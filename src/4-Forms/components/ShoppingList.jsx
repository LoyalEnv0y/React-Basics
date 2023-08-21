import { useState } from 'react';
// import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';
import UseForm from './UseForm';

function ShoppingList() {
	const [items, setItems] = useState([
		{ id: uuid(), product: 'Bananas', quantity: 8 },
		{ id: uuid(), product: 'Eggs', quantity: 12 },
	]);

	const addItem = (item) => {
		setItems((curItems) => [...curItems, { ...item, id: uuid() }]);
	};

	const removeItem = (id) => {
		setItems((curItems) => curItems.filter((i) => i.id != id));
	};

	return (
		<div>
			<h1>Shopping List</h1>
			<ul>
				{items.map((i) => (
					<li key={i.id}>
						<strong>{i.product}</strong> - {i.quantity}
						<button
							style={{ marginLeft: '10px' }}
							onClick={() => removeItem(i.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>

			<br />
			<br />
			{/* <ShoppingListForm handleOnSubmit={addItem} /> */}
			<UseForm addItem={addItem} />
		</div>
	);
}

export default ShoppingList;
