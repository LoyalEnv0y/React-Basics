function ColorList({ colors }) {
	return (
		<>
			<h2>Colors 🌈</h2>
			<ul>
				{colors.map((c, i) => (
					<li key={i} style={{ color: c }}>{c}</li>
				))}
			</ul>
		</>
	);
}

export default ColorList;
