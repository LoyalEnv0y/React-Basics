import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	// Get the rest of the properties from the params and assign them to
	// a variable called `rest`
	...rest
}) {
	let classes = classnames(
		rest.className,
		'px-3 py-1.5 border flex justify-between items-center text-white',
		{
			'bg-blue-600 border-blue-500 hover:bg-blue-500': primary,
			'bg-gray-700 border-gray-500 hover:bg-gray-700': secondary,
			'bg-green-600 border-green-500 hover:bg-green-500': success,
			'bg-yellow-500 border-yellow-500 hover:bg-yellow-500': warning,
			'bg-red-600 border-red-500 hover:bg-red-500': danger,
			'bg-white': outline,
			'text-blue-500 hover:text-white': outline && primary,
			'text-gray-500 hover:text-white': outline && secondary,
			'text-green-500 hover:text-white': outline && success,
			'text-yellow-500 hover:text-white': outline && warning,
			'text-red-500 hover:text-white': outline && danger,
			'rounded-full': rounded,
		}
	);

	classes = twMerge(classes);

	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const colorVariation = [
			primary,
			secondary,
			success,
			warning,
			danger,
		].filter((e) => e);

		if (colorVariation.length > 1)
			return new Error('Only one color is permitted to be true');
	},
};

export default Button;
