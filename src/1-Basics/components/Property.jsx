import '../styles/Property.css'

function Property({ item }) {
	return (
		<div className="property">
			<h2>{item.name}</h2>
			<h3>${item.price} a night</h3>
			<h4>{item.rating} ⭐</h4>
		</div>
	);
}

export default Property;
