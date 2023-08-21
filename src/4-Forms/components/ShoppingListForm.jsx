import { useState } from 'react';

function ShoppingListForm({ handleOnSubmit }) {
	const [formData, setFormData] = useState({ product: '', quantity: 0 });

	const handleChange = (evt) => {
		const target = evt.target.name;
		const value = evt.target.value;

		setFormData((curData) => ({ ...curData, [target]: value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		handleOnSubmit(formData);

		setFormData({ product: '', quantity: 0 });
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<section>
				<label htmlFor="product">Product Name: </label>
				<input
					id="product"
					name="product"
					type="text"
					placeholder="Tomato"
					value={formData.product}
					onChange={handleChange}
				/>
			</section>
			{!prodIsValid && (
				<p style={{ color: 'red' }}>Product cannot be empty!</p>
			)}

			<section>
				<label htmlFor="quantity">Product Quantity: </label>
				<input
					id="quantity"
					name="quantity"
					type="number"
					placeholder="0"
					value={formData.quantity}
					onChange={handleChange}
				/>
			</section>

			<button>Add Item</button>
		</form>
	);
}

export default ShoppingListForm;
