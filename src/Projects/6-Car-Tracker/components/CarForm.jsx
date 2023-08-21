import { useDispatch, useSelector } from 'react-redux';
import { addCar, changeCost, changeName } from '../store';

function CarForm() {
	const dispatch = useDispatch();
	const formData = useSelector((state) => {
		return state.form;
	});

	const handleChange = (evt) => {
		const field = evt.target.name;
		const value = evt.target.value;

		switch (field) {
			case 'name':
				dispatch(changeName(value));
				break;
			case 'cost':
				dispatch(changeCost(parseInt(value) || 0));
				break;
		}
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		dispatch(addCar({ name: formData.name, cost: formData.cost }));
	};

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add Car</h4>

			<form onSubmit={handleSubmit}>
				<div className="field-group">
					<div className="field">
						<label htmlFor="name" className="label">
							Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							className="input is-expanded"
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="field-group">
					<div className="field">
						<label htmlFor="cost" className="label">
							Cost
						</label>
						<input
							id="cost"
							type="text"
							name="cost"
							className="input is-expanded"
							value={formData.cost || ''}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="field">
					<button className="button is-link">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default CarForm;
