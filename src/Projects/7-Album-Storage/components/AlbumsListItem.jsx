import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ImagesList from './ImagesList';

function AlbumsListItem({ album }) {
	const [removeAlbum, result] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	};

	const header = (
		<>
			<Button
				danger
				onClick={handleRemoveAlbum}
				loading={result.isLoading}
				className={'mr-2'}
			>
				{result.error ? 'Error' : <DeleteForeverIcon />}
			</Button>
			{album.title}
		</>
	);

	return (
		<ExpandablePanel key={album.id} header={header}>
			<ImagesList album={album} />
		</ExpandablePanel>
	);
}

export default AlbumsListItem;
