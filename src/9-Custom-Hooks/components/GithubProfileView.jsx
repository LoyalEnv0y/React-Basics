import useFetchData from '../useFetchData';

const URL = 'https://api.github.com/users/QuincyLarson';

function GithubProfileView() {
	const { data, error, isLoading } = useFetchData(URL);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (error) {
		return <p style={{ color: 'red' }}>Error: {error}</p>;
	}

	return (
		<div>
			<img
				style={{ width: '100px', borderRadius: '25px' }}
				src={data.avatar_url}
				alt={data.name}
			/>
			<h2>{data.name}</h2>
			<h4>works at {data.company}</h4>
			<p>{data.bio}</p>
		</div>
	);
}

export default GithubProfileView;
