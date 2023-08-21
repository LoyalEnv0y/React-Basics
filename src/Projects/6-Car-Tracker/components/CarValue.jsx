import { useSelector } from 'react-redux';

function CarValue() {
	const totalCost = useSelector((state) => {
		const { entries, searchTerm } = state.cars;
		return entries
			.filter((c) => {
				const carNameLower = c.name.toLowerCase();
				const searchTermLower = searchTerm.toLowerCase();
				return carNameLower.includes(searchTermLower);
			})
			.reduce((total, current) => total + current.cost, 0);
	});

	return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
