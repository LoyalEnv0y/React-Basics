import LuckyDice from './components/LuckyDice';
import Boxes from './components/Boxes';
import { sumArr } from './utils';

const check10 = (dice) => {
	return sumArr(dice.map((die) => die.value)) === 10;
};

const checkSame = (dice) => {
	return dice.every((die) => die.value === dice[0].value);
};

function App() {
	return (
		<>
			{/* <LuckyDice title="Lucky 10" diceCount={2} winCheck={check10} /> */}
			{/* <LuckyDice title="Lucky All Same" diceCount={2} winCheck={checkSame} /> */}
			<Boxes boxCount={4} />
		</>
	);
}

export default App;
