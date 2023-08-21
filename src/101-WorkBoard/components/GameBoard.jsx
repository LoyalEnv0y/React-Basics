import { useState } from 'react';
import GameCell from './GameCell';

function GameBoard() {
	const [cells, setCells] = useState(Array(9).fill(''));
	const [isXTurn, setIsXTurn] = useState(true);
	const [turns, setTurns] = useState([]);

	const style = {
		display: 'flex',
		flexWrap: 'wrap',
		width: '93px',
	};

	const checkWin = () => {
		const possibleLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let line of possibleLines) {
			const [a, b, c] = line;
			if (cells[a] != '' && cells[a] === cells[b] && cells[a] === cells[c]) {
				return true;
			}
		}

		return false;
	};

	const hitCell = (idx) => {
		if (cells[idx] != '') return;
		const hitValue = isXTurn ? 'X' : 'O';

		setCells(() => {
			const newCells = cells.map((c, i) => (i == idx ? hitValue : c));
			setTurns([...turns, newCells]);

			return newCells;
		});
		setIsXTurn(!isXTurn);
	};

	const jumpTo = (turn) => {
		setCells(turn);
	};

	const gameOver = checkWin();

	return (
		<>
			{gameOver ? (
				<h3>Game Over! {isXTurn ? 'O' : 'X'} WON!</h3>
			) : (
				<h3>Next Player: {isXTurn ? 'X' : 'O'}</h3>
			)}

			<div style={style}>
				{cells.map((c, i) => (
					<GameCell
						key={i}
						handleClick={() => hitCell(i)}
						value={c}
						disabled={gameOver}
					/>
				))}
			</div>

			{turns.map((t, i) => (
				<div key={i}>
					<div style={{ display: 'inline' }}>{i + 1}.</div>
					<button onClick={() => jumpTo(t)}>Go to move #{i + 1}</button>
				</div>
			))}
		</>
	);
}

export default GameBoard;
