import '../styles/Button.css';

function Button({ text, handleOnClick }) {
	return (
		<button className="button" onClick={handleOnClick}>
			{text}
		</button>
	);
}

export default Button;
