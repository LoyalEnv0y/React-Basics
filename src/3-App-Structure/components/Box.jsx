import '../styles/Box.css';

function Box({ color, isActive, handleOnClick }) {
	return (
		<div
			className="box"
			style={{ backgroundColor: isActive ? color : 'black' }}
			onClick={handleOnClick}
		></div>
	);
}

export default Box;
