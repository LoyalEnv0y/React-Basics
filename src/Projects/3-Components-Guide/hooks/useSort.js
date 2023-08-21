import { useState } from "react";
/*
	The best way to create custom hooks from already written code is a 8 step
	process.

	1 - 🔨 Make a function called `useSomething`
	2 - 🔍 Find all the non-JSX expressions that refer to 1-2 related pieces of 
		state
	3 - ✂️ Cut them out and paste them into `useSomething`
	4 - 💥 Find 'not defined' errors in the component
	5 - 🫱 In the hook, return the values the component needs
	6 - 📞 In the component call the hook and destructure the values it needs
	7 - ⚙️ Find 'not defined' errors in the hook and pass the missing variables as
		arguments to the hook from the component
	8 - 📝 Rename the hook and return values.
*/
function useSort(data, config) {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const setSortColumn = (label) => {
		// if the table is already sorted for one column
		if (sortBy && label !== sortBy) {
			setSortOrder('asc');
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortOrder('asc');
			setSortBy(label);
		} else if (sortOrder === 'asc') {
			setSortOrder('desc');
			setSortBy(label);
		} else {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	// Only sort when sortOrder and sortBy are not null
	// Make a copy od the `data` prop
	// Find the correct sortValue function and use it for sorting
	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find((column) => column.label === sortBy);
		sortedData = [...data].sort((a, b) => {
			a = sortValue(a);
			b = sortValue(b);

			const order = sortOrder === 'asc' ? 1 : -1;

			if (typeof a === 'string') {
				return a.localeCompare(b) * order;
			}

			return (a - b) * order;
		});
	}

	return { sortOrder, sortBy, sortedData, setSortColumn };
}

export default useSort;