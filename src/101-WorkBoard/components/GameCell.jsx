function GameCell({ handleClick, value, disabled }) {
	const style = {
		background: ' #fff',
		border: '1px solid #999',
		height: '30px',
		width: '30px',
		marginRight: '-1px',
		marginTop: '-1px',
		cursor: 'pointer',
		userSelect: 'none',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 'bold',
	};
	return (
		<button style={style} onClick={handleClick} disabled={disabled}>
			{value}
		</button>
	);
}

export default GameCell;
