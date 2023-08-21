import '../styles/Die.css';

function Die({ value }) {
	return (
		<div className="die">
			<span>{value}</span>
		</div>
	);
}

export default Die;
