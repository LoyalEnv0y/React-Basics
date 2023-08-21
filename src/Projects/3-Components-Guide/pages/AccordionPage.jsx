import Accordion from '../components/Accordion';
import { v4 as uuid } from 'uuid';

const items = [
	{
		id: uuid(),
		label: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		content:
			'1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt mollitia, aliquam repellendus blanditiis quae in ducimus vitae distinctio iste tenetur? Ipsa, quod quae. Minima ullam soluta similique optio et.',
	},
	{
		id: uuid(),
		label: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		content:
			'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt mollitia, aliquam repellendus blanditiis quae in ducimus vitae distinctio iste tenetur? Ipsa, quod quae. Minima ullam soluta similique optio et.',
	},
	{
		id: uuid(),
		label: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		content:
			'3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt mollitia, aliquam repellendus blanditiis quae in ducimus vitae distinctio iste tenetur? Ipsa, quod quae. Minima ullam soluta similique optio et.',
	},
	{
		id: uuid(),
		label: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		content:
			'4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt mollitia, aliquam repellendus blanditiis quae in ducimus vitae distinctio iste tenetur? Ipsa, quod quae. Minima ullam soluta similique optio et.',
	},
];

function AccordionPage() {
	return <Accordion items={items} />;
}

export default AccordionPage;
