/* eslint-disable react/prop-types */
import Table from './Table';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useSort from '../hooks/useSort';

function SortableTable(props) {
	const { data, config } = props;
	const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
		data,
		config
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) return column;

		return {
			...column,
			header: () => (
				<th
					className="cursor-pointer hover:bg-gray-100"
					onClick={() => setSortColumn(column.label)}
				>
					<div className="flex items-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	// The config value in the props will be overridden.
	return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
	if (label !== sortBy || sortOrder === null) {
		return (
			<div>
				<ExpandLessIcon className="!block" />
				<ExpandMoreIcon className="!block" />
			</div>
		);
	}

	if (sortOrder === 'asc') {
		return <ExpandLessIcon />;
	}

	return <ExpandMoreIcon />;
}

export default SortableTable;
