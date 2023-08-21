function Greeter(props) {
	const name = props.name || "You"

	return <h1>Hello, {name}!</h1>;
}

export default Greeter;