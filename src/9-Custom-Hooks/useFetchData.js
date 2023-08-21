import { useEffect, useState } from "react";

function useFetchData(URL) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const resp = await fetch(URL);
				if (resp.ok) {
					const respJSON = await resp.json();
					setData(respJSON);
					return
				} 

				throw new Error('Error while fetching data')

			} catch (e) {
				setError(e.message);

			} finally {
				setIsLoading(false)
			}
		}

		getData();
	}, [URL])

	return { data, isLoading, error };
}

export default useFetchData;