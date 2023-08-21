import { useState } from 'react';
import { v4 as uuid } from 'uuid';

let winner = null;

function ScoreKeeper2({ playerCount, finalScore = 10 }) {
	const [players, setPlayers] = useState(() =>
		Array(playerCount)
			.fill()
			.map(() => ({ id: uuid(), score: 0 }))
	);

	const incScore = (id) => {
		setPlayers((curPlayers) => {
			const updatedPlayers = curPlayers.map((p) => {
				return p.id === id ? { ...p, score: p.score + 1 } : p;
			});

			const winners = updatedPlayers.filter((p) => p.score >= finalScore);
			winner = winners.length > 0 && winners[0];

			return updatedPlayers;
		});
	};

	const resetScores = () => {
		setPlayers(
			Array(playerCount)
				.fill()
				.map(() => ({ id: uuid(), score: 0 }))
		);
	};

	return (
		<>
			<ul>
				{players.map((p, i) => (
					<li key={p.id}>
						Player{i + 1}: {p.score}
						<button
							onClick={() => incScore(p.id)}
							disabled={winner && true}
						>
							+1
						</button>
						{winner && p.id === winner.id && <span>WINNER!</span>}
					</li>
				))}
			</ul>

			<button onClick={resetScores}>Reset</button>
		</>
	);
}

export default ScoreKeeper2;
