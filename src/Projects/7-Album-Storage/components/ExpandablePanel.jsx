import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function ExpandablePanel({ header, children }) {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className="mb-2 border rounded">
				<div className="flex p-2 justify-between items-center">
					<div className="flex flex-row items-center justify-between">
						{header}
					</div>

					<div onClick={handleClick} className="cursor-pointer">
						{expanded ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}
					</div>
				</div>
				{expanded && <div className="p-2 border-t">{children}</div>}
			</div>
		</>
	);
}

export default ExpandablePanel;
