import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data';
import { addSong, removeSong } from '../store';

/*
	====================================== 🚨 ======================================
	The `useDispatch` hook returns the stores dispatch method to use dispatch 
	actions.

	====================================== 🕹️ ======================================
	The `useSelector` takes in a function to get the slice of our giant state. It
	also subscribes to it so if any changes are being made to the slice, the 
	component is rerendered.
*/
function SongPlaylist() {
	const dispatch = useDispatch();

	const songPlaylist = useSelector((state) => {
		return state.songs;
	});

	const handleSongAdd = (song) => {
		dispatch(addSong(song));
	};
	const handleSongRemove = (song) => {
		dispatch(removeSong(song));
	};

	const renderedSongs = songPlaylist.map((song) => {
		return (
			<li key={song}>
				{song}
				<button
					onClick={() => handleSongRemove(song)}
					className="button is-danger"
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className="content">
			<div className="table-header">
				<h3 className="subtitle is-3">Song Playlist</h3>
				<div className="buttons">
					<button
						onClick={() => handleSongAdd(createRandomSong())}
						className="button is-link"
					>
						+ Add Song to Playlist
					</button>
				</div>
			</div>
			<ul>{renderedSongs}</ul>
		</div>
	);
}

export default SongPlaylist;
