import classnames from 'classnames';
import useNavigation from '../hooks/useNavigation';

/*
	Doing <a href={to}>{children}</a> would trigger a full page refresh so we 
	prevent the default behavior of the anchor link. Afterwards we set the url to 
	the given url by calling `navigate` function of our context.
*/
function Link({ to, children, className, activeStyles, ...rest }) {
	const { currentPath, navigate } = useNavigation();

	const classes = classnames(
		'text-blue-500 hover:underline',
		className,
		currentPath === to && activeStyles
	);

	const handleClick = (evt) => {
		if (evt.ctrlKey || evt.metaKey) return;

		evt.preventDefault();

		navigate(to);
	};

	return (
		<a href={to} onClick={handleClick} className={classes} {...rest}>
			{children}
		</a>
	);
}

export default Link;
