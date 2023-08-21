import { useAddPhotoMutation, useFetchImagesQuery } from '../store/apis/photosApi';
import Button from './Button';
import ImageListItem from './ImageListItem';
import Skeleton from './Skeleton';

function ImagesList({ album }) {
	const { data, error, isFetching } = useFetchImagesQuery(album);
	const [addPhoto, result] = useAddPhotoMutation();

	const handleAddPhoto = () => {
		addPhoto(album);
	};

	let content;

	if (isFetching) {
		content = <Skeleton times={5} className="w-24 h-20" />;
	} else if (error) {
		content = <div>Error catching images</div>;
	} else {
		content = data.map((image) => (
			<ImageListItem key={image.key} image={image} />
		));
	}

	return (
		<>
			<div className="flex justify-between items-center m-2">
				<h3 className="text-lg font-bold">Photos in {album.title}</h3>
				<Button
					success
					rounded
					onClick={handleAddPhoto}
					loading={result.isLoading}
				>
					{result.isError ? 'Error' : '+ Add Image'}
				</Button>
			</div>
			<div className="flex flex-wrap gap-1 justify-center items-center">
				{content}
			</div>
		</>
	);
}
export default ImagesList;
