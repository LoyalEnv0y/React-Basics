// Always rendering an element whether or not the condition is true.
/*
function DoubleDice() {
	const num1 = Math.floor(Math.random() * 3) + 1;
	const num2 = Math.floor(Math.random() * 3) + 1;
	const result = num1 === num2 ? 'You win 😄' : 'You lose ☹️';

	return (
		<div>
			<h2>{result}</h2>
			<p>Num1: {num1}</p>
			<p>Num2: {num2}</p>
		</div>
	);
}
*/

// Rendering additional elements only when the condition is true.
function DoubleDice() {
	const num1 = Math.floor(Math.random() * 3) + 1;
	const num2 = Math.floor(Math.random() * 3) + 1;

	// To add a class, define a styles object and reference it in the element.
	// Only use this when adding dynamic styles.
	const styles = {
		color: num1 === num2 ? "green" : "red" 
	}

	return (
		<div className="DoubleDice" style={styles}>
			<h2>Double Dice</h2>
			{num1 === num2 && <h3>You win 😄</h3>}
			<p>Num1: {num1}</p>
			<p>Num2: {num2}</p>
		</div>
	);
}

export default DoubleDice;
