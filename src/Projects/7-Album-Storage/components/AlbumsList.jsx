import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

/*
	====================================== 🪝 ======================================
	The hooks we use for a query is different than the hooks we use for mutations.

	====================================== 🛠️ ======================================
	The first object that comes from the mutation hooks is a function. When we call
	this function that is when the mutation is actually executed.
	
	====================================== 🎭 ======================================
	The second object is very similar to what a query hook returns. It contains
	information such as `isLoading`, `error` and `data`. 

*/
function AlbumsList({ user }) {
	const { data, error, isFetching } = useFetchAlbumsQuery(user);
	const [addAlbum, results] = useAddAlbumMutation();

	const handleAddAlbum = () => {
		addAlbum(user);
	};

	let content;
	if (isFetching) {
		content = <Skeleton times={3} className="h-10 w-full" />;
	} else if (error) {
		content = <div>Error loading albums.</div>;
	} else {
		content = data.map((album) => (
			<AlbumsListItem key={album.id} album={album} />
		));
	}

	return (
		<>
			<div className="flex justify-between items-center m-2">
				<h3 className="text-lg font-bold">Albums for {user.name}</h3>
				<Button
					warning
					rounded
					onClick={handleAddAlbum}
					loading={results.isLoading}
				>
					{results.error ? 'Error' : '+ Add Album'}
				</Button>
			</div>
			<div>{content}</div>
		</>
	);
}

export default AlbumsList;
