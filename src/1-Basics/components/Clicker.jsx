function handleClick() {
	console.log('Clicked the button!')
}

function handleMouseOver() {
	console.log('Hovered the button!')
}

function Clicker() {
	return (
		<div>
			<p>Click The Button</p>
			<button onClick={handleClick}>Click!</button>
			<br />

			<p>Hover the Button</p>
			<button onMouseOver={handleMouseOver}>Hover!</button>
		</div>
	)
}

export default Clicker;