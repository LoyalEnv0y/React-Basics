function handleFormSubmit(e) {
	e.preventDefault();
	console.log("Submitted the form!")
}

function Form() {
	return (
		<form onSubmit={handleFormSubmit}>
			<button>Submit</button>
		</form>
	)
}

export default Form