import SortableTable from '../components/SortableTable';
// import Table from '../components/Table';
import { v4 as uuid } from 'uuid';
const data = [
	{ id: uuid(), name: 'Orange', color: 'bg-orange-500', score: 5 },
	{ id: uuid(), name: 'Apple', color: 'bg-red-500', score: 3 },
	{ id: uuid(), name: 'Banana', color: 'bg-yellow-500', score: 1 },
	{ id: uuid(), name: 'Lime', color: 'bg-green-500', score: 4 },
	{ id: uuid(), name: 'Cherry', color: 'bg-rose-800', score: 2.5 },
];

const config = [
	{
		label: 'Fruits',
		render: (fruit) => fruit.name,
		sortValue: (fruit) => fruit.name,
	},
	{
		label: 'Color',
		render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
	},
	{
		label: 'Score',
		render: (fruit) => fruit.score,
		sortValue: (fruit) => fruit.score,
	},
	{
		label: 'Score ^2',
		render: (fruit) => fruit.score ** 2,
		sortValue: (fruit) => fruit.score ** 2,
	},
];

function TablePage() {
	return <SortableTable data={data} config={config} />;
}

export default TablePage;
