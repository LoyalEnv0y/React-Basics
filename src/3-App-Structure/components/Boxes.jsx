import { useState } from 'react';
import '../styles/Boxes.css';
import Box from './Box';
import Button from './Button';
import { v4 as uuid } from 'uuid';

function Boxes({ boxCount = 10 }) {
	const [boxes, setBoxes] = useState(
		Array(boxCount)
			.fill()
			.map(() => ({ id: uuid(), color: 'red', isActive: false }))
	);

	const toggleIsActive = (id) => {
		setBoxes(
			boxes.map((b) =>
				b.id === id ? { ...b, isActive: !b.isActive } : b
			)
		);
	};

	const clearColors = () => {
		setBoxes(boxes.map((b) => ({ ...b, isActive: false })));
	};

	const randomizeColors = () => {
		setBoxes(boxes.map((b) => ({ ...b, isActive: Math.random() >= 0.5 })));
	};

	return (
		<>
			<section className="boxes">
				{boxes.map((b) => (
					<Box
						key={b.id}
						color={b.color}
						isActive={b.isActive}
						handleOnClick={() => toggleIsActive(b.id)}
					></Box>
				))}
			</section>

			<Button text={'Clear'} handleOnClick={clearColors} />
			<Button text={'Randomize'} handleOnClick={randomizeColors} />
		</>
	);
}

export default Boxes;
