import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const items = [
	{
		id: uuid(),
		label: 'Red',
		value: 'red',
	},
	{
		id: uuid(),
		label: 'Green',
		value: 'green',
	},
	{
		id: uuid(),
		label: 'Blue',
		value: 'blue',
	},
];

function DropdownPage() {
	const [selection, setSelection] = useState(null);
	const handleSelect = (option) => {
		setSelection(option);
	};

	return (
		<Dropdown options={items} value={selection} onChange={handleSelect} />
	);
}

export default DropdownPage;
