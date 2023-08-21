import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';

function Table({ data, config }) {
	const headers = config.map((c) => {
		if (c.header) return <Fragment key={uuid()}>{c.header()}</Fragment>;

		return <th key={uuid()}>{c.label}</th>;
	});

	const cells = data.map((d) => {
		return (
			<tr key={d.id} className="border-b">
				{config.map((c) => {
					return (
						<td key={uuid()} className="p-2">
							{c.render(d)}
						</td>
					);
				})}
			</tr>
		);
	});

	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{headers}</tr>
			</thead>

			<tbody>{cells}</tbody>
		</table>
	);
}

export default Table;
