import { useState } from 'react';
import "../styles/ColorCell.css";

const colors = [
	'#E53935',
	'#E91E63',
	'#9C27B0',
	'#673AB7',
	'#3F51BF',
	'#2196F3',
	'#03A9F4',
	'#00BCD4',
	'#009688',
	'#4CAF50',
	'#8BC34A',
	'#CDDC39',
	'#FFEB3B',
	'#FF9800',
	'#FF5722',
];

const getColorSample = () => colors[Math.floor(Math.random() * colors.length)];

function ColorCell() {
	const [c, setColor] = useState(getColorSample());

	return (
		<div
			style={{backgroundColor: c}}
			className="color-cell"
			onClick={() => setColor(() => getColorSample())}
		></div>
	);
}

export default ColorCell;
