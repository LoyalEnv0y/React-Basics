import { useState } from 'react';

/*
	When rerendering a component react checks to see if the values are same as before.
	If they are, React will short circuit and won't update the component. And since
	Arrays and Objects do not change their shells when an item is added or updated,
	React won't update the component. To work around this we copy the old object and
	save the changes in the new object. Finally we set the newObject as the old object.
*/
function ScoreKeeper() {
	const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

	const incScore = (player) => {
		setScores((curScores) => {
			/* 
				Below we spread the `curScores` object then increment passed in
				player's score.
				
				`[player]` is different than `player` when used in an object.
				Here `[player]` refers to the parameter passed in to function.
				But `player` refers to a new undefined property of the object. 
				so the first example results in `{p1Score: 1}` and the second
				example results in `player: 1`.
			*/
			return { ...curScores, [player]: curScores[player] + 1 };
		});
	};

	return (
		<>
			<h4>Player 1: {scores.p1Score}</h4>
			<h4>Player 2: {scores.p2Score}</h4>

			{/* 
				The difference between saying 
				`onClick={incScore('p1Score')}` AND
				`onClick={() => incScore('p1Score')}`
				is the fact that in the first example react runs the function twice.
				First when saving the event and second to run the event. But in the
				second example react saves the anonymous function which calls the
				`incScore` function and only calls it once the event is fired.
				Therefore it is better to call the needed function in an anonymous
				function if there is a parameter to be passed.
			*/}
			<button onClick={() => incScore('p1Score')}>+1 Player 1</button>
			<button onClick={() => incScore('p2Score')}>+1 Player 2</button>
		</>
	);
}

export default ScoreKeeper;
