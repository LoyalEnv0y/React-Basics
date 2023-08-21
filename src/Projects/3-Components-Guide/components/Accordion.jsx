import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Accordion({ items }) {
	const [expendedIndex, setExpendedIndex] = useState(0);

	const setIndex = (isExpended, idx) =>
		setExpendedIndex(isExpended ? -1 : idx);

	const getButtonType = (isExpended) =>
		isExpended ? <ExpandLessIcon /> : <ExpandMoreIcon />;

	return (
		<section>
			{items.map((i, idx) => {
				const isExpended = idx === expendedIndex;

				return (
					<div key={i.id} className="max-w-3xl">
						<div
							className="flex p-3 justify-between border-b bg-gray-100 cursor-pointer"
							onClick={() => setIndex(isExpended, idx)}
						>
							<h3 className="text-xl">{i.label}</h3>
							{getButtonType(isExpended)}
						</div>

						{isExpended && (
							<p className="border-b p-3 mt-1 bg-gray-50">
								{' '}
								{i.content}{' '}
							</p>
						)}
					</div>
				);
			})}
		</section>
	);
}

export default Accordion;
