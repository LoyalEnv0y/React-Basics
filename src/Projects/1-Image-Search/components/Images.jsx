import useGetImages from '../useGetImages';
import Image from './Image';

const IMAGES_URL = 'https://api.unsplash.com/search/photos';

function Images({ searchTerm }) {
	const { images, isLoading, error } = useGetImages(IMAGES_URL, searchTerm);
	
	if (isLoading) return <h3>Loading The Images...</h3>;
	if (error) return <p style={{ color: 'red' }}>{error}</p>;

	return (
		<>
			<h1>Images:</h1>
			{images.map((i) => (
				<Image key={i?.id} img={i} />
			))}
		</>
	);
}
export default Images;
