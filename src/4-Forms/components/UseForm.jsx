import { useForm } from 'react-hook-form';

/*
	ReactHookForm library helps with validating form data and using inputs.
	view docs => https://www.react-hook-form.com/get-started
*/
function ShoppingListForm({ addItem }) {
	/* 
		Get useful methods from the useFrom hooks.

		`register` is the function used for setting which inputs are to be validated
		and helps setting what validations will be used.

		`handleSubmit` if the form validation is successful this function will receive
		the form data.

		`reset` will reset the form data.

		To see more functions of useForm check the official docs
		=> https://react-hook-form.com/docs/useform

		`mode: 'onChange'` declares so that validation runs with each input change
		more mods => https://react-hook-form.com/docs/useform#mode
	*/
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: 'onChange' });

	// These are the validation options. It is possible to write custom validations
	// View docs => https://react-hook-form.com/docs/useform/register
	const registerOptions = {
		product: { required: 'Name is required' },
		quantity: {
			required: 'Quantity is required',
			min: {
				value: 0,
				message: 'Quantity must be greater than 0',
			},
			max: {
				value: 100,
				message: 'Quantity must be less than 100',
			},
		},
	};

	const onSubmit = (data) => {
		addItem(data);
		reset();
	};

	return (
		// HandleSubmit will check all the fields if successful it will run the `onSubmit` function
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="product">Product Name: </label>
				<input
					id="product"
					name="product"
					type="text"
					placeholder="Tomato 🍅"
					// Here, we are registering the `product` field with validations to the form
					{...register('product', registerOptions.product)}
				/>
				<small style={{ color: 'red' }}>
					{/* If any error with the validation is encountered, we get the errors from here */}
					{errors?.product && errors.product.message}
				</small>
			</div>

			<div>
				<label htmlFor="quantity">Product Quantity: </label>
				<input
					id="quantity"
					name="quantity"
					type="number"
					{...register('quantity', registerOptions.quantity)}
				/>
				<small style={{ color: 'red' }}>
					{errors?.quantity && errors.quantity.message}
				</small>
			</div>

			<button>Add Item</button>
		</form>
	);
}

export default ShoppingListForm;
