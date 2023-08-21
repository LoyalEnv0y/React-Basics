import Die from './Die';
import '../styles/Dice.css';

function Dice({ dice }) {
	return (
		<section className="dice">
			{dice.map((die) => (
				<Die key={die.id} value={die.value}></Die>
			))}
		</section>
	);
}

export default Dice;
