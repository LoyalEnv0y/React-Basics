import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetImages( URL, searchTerm ) {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');
	console.log('helleo')

	useEffect(() => {
		const getData = async () => {
			try {
				const resp = await axios.get(
					URL,
					{
						params: {
							query: searchTerm,
							orientation: 'landscape',
							client_id: 'nq6_o3_DnVCiVy2Z3bRpnmorpmK3l_kMGgXk2G2Bo-E',
						},
					}
				);
				setImages(resp.data.results);
			} catch (e) {
				console.log('Error => ', e.message)
				setError(`There has been an error while getting images. Error => ${e.message}`);
			} finally {
				setIsLoading(false);
			}
		};
		getData()
	}, [searchTerm]);

	return { images, isLoading, error };
}
export default useGetImages;