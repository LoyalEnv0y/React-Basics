import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/*
	Please read the top comment in the ./ScoreKeeper.jsx file to understand
	why we need to make a new array so that React will rerender the component
	when we need to.
*/

const randEmojis = [
	'☹️',
	'😶‍🌫️',
	'🥵',
	'🥶',
	'😂',
	'😅',
	'😉',
	'😊',
	'😎',
	'😍',
	'🥰',
	'😗',
	'🥲',
	'🤗',
	'🤩',
	'😶',
	'😑',
	'🙄',
	'🤐',
	'😒',
	'🫠',
	'😤',
	'🤯',
	'🤔',
];

const sampleArr = (arr) => arr[Math.floor(Math.random() * arr.length)];

function EmojiClicker() {
	const [emojis, setEmojis] = useState([{ id: uuid(), value: '😃' }]);

	const addEmoji = () => {
		setEmojis((curEmojis) => {
			return [...curEmojis, { id: uuid(), value: sampleArr(randEmojis) }];
		});
	};

	const deleteEmoji = (id) => {
		setEmojis((curEmojis) => {
			return curEmojis.filter((curEmoji) => curEmoji.id !== id);
		});
	};

	const makeAllHearts = () => {
		setEmojis((curEmojis) => {
			return curEmojis.map((emoji) => ({ ...emoji, value: '❤️' }));
		});
	};

	return (
		<div>
			{emojis.map((emoji) => (
				<span
					style={{
						fontSize: '4rem',
						cursor: 'pointer',
						userSelect: 'none',
					}}
					key={emoji.id}
					onClick={() => deleteEmoji(emoji.id)}
				>
					{emoji.value}
				</span>
			))}

			<br />

			<button onClick={addEmoji}>Add an Emoji</button>
			<button onClick={makeAllHearts}>Make All Hearts</button>
		</div>
	);
}

export default EmojiClicker;
