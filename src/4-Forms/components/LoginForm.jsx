function LoginForm() {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const data = new FormData(evt.currentTarget);

		console.log('Just the email =>', data.get('email'));
		console.log('Whole Data =>', [...data.entries()]);

		const newUser = Object.fromEntries(data);
		console.log(newUser);

		evt.currentTarget.reset();
	};
	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<h4>Form Data API</h4>
				{/* email */}
				<div className="form-row">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="text"
						className="form-input"
						id="email"
						name="email"
					/>
				</div>
				{/* Passport */}
				<div className="form-row">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-input"
						id="password"
						name="password"
					/>
				</div>

				{/* Remember me */}
				<div className="form-row">
					<input
						type="checkbox"
						className="form-input"
						id="rememberMe"
						name="rememberMe"
					/>
					<label htmlFor="rememberMe" className="form-label">
						Remember Me
					</label>
				</div>

				<button type="submit" className="btn btn-block">
					submit
				</button>
			</form>
		</div>
	);
}
export default LoginForm;
