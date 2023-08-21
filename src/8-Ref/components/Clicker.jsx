import { useEffect, useRef, useState } from 'react';

/*
	`useRef` hooks are similar to state hooks. Both State and Ref hooks let us
	keep track of values and modify them. However, the difference is that when
	we modify the value of a State, the component rerenders but when we modify
	the value of a Ref, the component doesn't rerender.
*/
const Clicker = () => {
	const [value, setValue] = useState(0);
	/*
		When a new Ref is created, it sets it's value to an object with the
		property of `current` as the initial value. When the component is
		rerendered the initial value is ignored just like State. To modify
		the value of Ref, directly access it.
	*/
	const refContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer);
		const num = parseInt(refContainer.current.value);
		setValue(num);
	};

	/*
		Refs can be pointed to an HTML element by using the `ref` attribute.
		Once the element is linked to the Ref, we can access the elements 
		properties.
	*/
	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-row">
					<label htmlFor="value" className="form-label">
						Set Value
					</label>
					<input
						type="number"
						id="value"
						className="form-input"
						ref={refContainer}
					/>
				</div>
				<button type="submit" className="btn btn-block">
					submit
				</button>
			</form>

			<h1>value : {value}</h1>

			<button onClick={() => setValue(value + 1)} className="btn">
				increase
			</button>
		</div>
	);
};

export default Clicker;
