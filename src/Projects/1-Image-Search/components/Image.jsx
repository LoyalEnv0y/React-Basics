function Image({ img }) {
	return (
		<img src={img?.urls?.regular} alt={img?.alt_description} height="250px" />
	);
}
export default Image;
