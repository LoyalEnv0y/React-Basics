import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
	const dispatch = useDispatch();
	const cars = useSelector((state) => {
		const { entries, searchTerm } = state.cars;

		return entries.filter((c) => {
			const carNameLower = c.name.toLowerCase();
			const searchTermLower = searchTerm.toLowerCase();
			return carNameLower.includes(searchTermLower);
		});
	});
	const carRegisterName = useSelector((state) => {
		return state.form.name;
	});

	const handleClick = (id) => {
		dispatch(removeCar(id));
	};

	const renderedCars = () => {
		return cars.map((c) => {
			const bold =
				carRegisterName &&
				c.name.toLowerCase().includes(carRegisterName.toLowerCase());

			return (
				<div key={c.id} className={`panel ${bold && 'bold'}`}>
					<p>
						{c.name} - ${c.cost}
					</p>

					<button
						className="button is-danger"
						onClick={() => handleClick(c.id)}
					>
						Delete
					</button>
				</div>
			);
		});
	};

	return (
		<div className="car-list">
			{renderedCars()}
			<hr />
		</div>
	);
}

export default CarList;
