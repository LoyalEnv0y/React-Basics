import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
	const dispatch = useDispatch();

	const searchTerm = useSelector((state) => {
		return state.cars.searchTerm;
	});

	const handleChange = (evt) => {
		dispatch(changeSearchTerm(evt.target.value));
	};

	return (
		<div className="list-header">
			<h3 className="title is-3">My Cars</h3>

			<div className="search field is-horizontal">
				<label htmlFor="search" className="label">
					Search
				</label>
				<input
					id="search"
					type="text"
					className='input'
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default CarSearch;
