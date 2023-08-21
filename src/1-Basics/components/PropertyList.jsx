import Property from './Property';
import '../styles/PropertyList.css'

function PropertyList({ items }) {
	return (
		<div className="property-list">
			{items.map((i) => (
				<Property key={i.id} item={i} />
			))}
		</div>
	);
}

export default PropertyList;
