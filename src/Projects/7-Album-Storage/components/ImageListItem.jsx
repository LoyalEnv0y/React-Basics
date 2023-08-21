import { DeleteForever } from '@mui/icons-material';
import { useDeletePhotoMutation } from '../store';

function ImageListItem({ image }) {
	const [deletePhoto] = useDeletePhotoMutation();

	const handleDeletePhoto = () => {
		deletePhoto(image);
	};

	return (
		<div className="relative m-2 cursor-pointer" onClick={handleDeletePhoto}>
			<img
				src={image.url}
				alt="image"
				key={image.id}
				className="h-20 border-gray-600 border"
			/>

			<div
				className="
				absolute
				inset-0
				flex
				items-center
				justify-center
				hover:bg-gray-200
				opacity-0
				hover:opacity-60"
			>
				<DeleteForever />
			</div>
		</div>
	);
}

export default ImageListItem;
