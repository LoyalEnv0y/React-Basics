import ColorCell from './ColorCell';
import '../styles/ColorBox.css';

function ColorBox() {
	const cells = [];

	for (let i = 0; i < 25; i++) {
		cells.push(<ColorCell key={i}/>);
	}

	return <div className="color-box">{cells}</div>;
}

export default ColorBox;
