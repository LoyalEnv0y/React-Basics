import { useState } from 'react';
import { getNRoll } from '../utils.js';
import { v4 as uuid } from 'uuid';
import Dice from './Dice.jsx';
import '../styles/LuckyDice.css';
import Button from './Button.jsx';

function LuckyDice({ title, diceCount, winCheck }) {
	const mapDice = () => {
		const dice = getNRoll(diceCount);
		return dice.map((die) => ({ id: uuid(), value: die }));
	};

	const [dice, setDice] = useState(() => mapDice());
	const won = winCheck(dice);

	const refreshDice = () =>setDice(mapDice());

	return (
		<section className="game">
			<h1>
				{title} {won && <span className="win-text">You Won!</span>}
			</h1>
			<Dice dice={dice}></Dice>

			<Button handleOnClick={refreshDice} text={'Roll Again!'} />
		</section>
	);
}

export default LuckyDice;
