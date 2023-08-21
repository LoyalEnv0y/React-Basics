import { useEffect, useState } from 'react';
import ProfileSearchForm from './ProfileSearchForm';

const BASE_URL = 'https://api.github.com/users/';

function ProfileViewer() {
	const [fullURL, setFullURL] = useState();
	const [profile, setProfile] = useState({ data: null });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			if (!fullURL) return;

			try {
				const resp = await fetch(fullURL);
				if (resp.ok) {
					const respJSON = await resp.json();
					setProfile({ data: respJSON });
					setIsLoading(false);
				}
			} catch (err) {
				console.log(err);
			}
		};

		getData();
	}, [fullURL]);

	const search = (term) => {
		setFullURL(`${BASE_URL}${term}`);
	};

	if (isLoading && profile.data) return <p>Loading... </p>;

	return (
		<>
			{profile.data && (
				<img src={profile.data.avatar_url} alt="Profile picture" />
			)}

			<ProfileSearchForm search={search} />
		</>
	);
}

export default ProfileViewer;
