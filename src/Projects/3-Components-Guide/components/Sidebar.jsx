import Link from './Link';
import { v4 as uuid } from 'uuid';

function Sidebar() {
	const links = [
		{
			id: uuid(),
			label: 'Accordion',
			path: '/',
		},
		{
			id: uuid(),
			label: 'Buttons',
			path: '/button',
		},
		{
			id: uuid(),
			label: 'Dropdown',
			path: '/dropdown',
		},
		{
			id: uuid(),
			label: 'Modal',
			path: '/modal',
		},
		{
			id: uuid(),
			label: 'Table',
			path: '/table',
		},
		{
			id: uuid(),
			label: 'Counter',
			path: '/counter',
		},
	];

	return (
		<div className={'sticky top-0 flex flex-col items-start'}>
			{links.map((link) => (
				<Link
					key={link.id}
					to={link.path}
					className={'mb-3'}
					activeStyles={'font-bold border-l-2 border-blue-500 pl-2 '}
				>
					{link.label}
				</Link>
			))}
		</div>
	);
}

export default Sidebar;
