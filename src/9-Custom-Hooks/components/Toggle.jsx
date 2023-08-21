import useToggle from '../useToggle';

function Toggle() {
	const [show, toggle] = useToggle(false);

	return (
		<>
			<h4>Toggle custom hook</h4>
			<button className="btn" onClick={toggle}>
				Toggle
			</button>
			{show && <h4>Some Stuff</h4>}
		</>
	);
}
export default Toggle;
 