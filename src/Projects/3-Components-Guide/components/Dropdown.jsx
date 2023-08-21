import { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Panel from './Panel';

/*
	`useRef` lets us to set a pointer to an HTML element or a value. To reference
	an element in the DOM set the `ref` attribute to the previously created hook
	element.
*/
function Dropdown({ options, value, onChange }) {
	// Hooks
	const [isOpen, setIsOpen] = useState(false);
	const divElement = useRef();

	/*
		To understand what is happening down below, we need to first understand
		how the browser handles events. There are there steps to handling events
		for DOM.
		
		When an element is interacted (e.g clicked); 
		1 => Capture Phase: Go to every element from the most parent to least
			parent and ask if that (i.e parent) element has any events. If so
			then fire that event.
		2 => Target Phase: Go to the clicked element. Check if it has an event.
			If so then fire that event.
		3 => Bubble Phase: Go to every element from the least parent to most
			parent and ask if that (i.e parent) element has any events. If so
			then fire that event. (This is the reverse order of the Capture 
			Phase.)
		
		When an event listener is added, the Capture Phase is turned off by 
		default. To enable it => 
		`<element>.addEventListener('click', handleClick, true)`
	*/
	useEffect(() => {
		const handler = (evt) => {
			const element = divElement.current;
			if (!element) return;

			if (!element.contains(evt.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handler, true);

		return () => document.removeEventListener('click', handler);
	}, []);

	// Functions
	const toggleOpen = () => setIsOpen(!isOpen);

	const getTitle = () => value?.label || 'Select..';

	const getButtonType = () => {
		if (isOpen) return <ExpandLessIcon className="text-sky-500" />;
		return <ExpandMoreIcon className="text-sky-500" />;
	};

	const getOptions = () => {
		if (!isOpen) return;

		return (
			<Panel className="top-full">
				{options.map((o) => {
					return (
						<p
							key={o.id}
							className="hover:bg-sky-100 rounded cursor-pointer p-1"
							onClick={() => {
								toggleOpen();
								onChange(o);
							}}
						>
							{o.label}
						</p>
					);
				})}
			</Panel>
		);
	};

	return (
		<div ref={divElement} className="w-48 select-none cursor-pointer">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={toggleOpen}
			>
				<p>{getTitle()}</p>
				{getButtonType()}
			</Panel>

			{getOptions()}
		</div>
	);
}

export default Dropdown;
