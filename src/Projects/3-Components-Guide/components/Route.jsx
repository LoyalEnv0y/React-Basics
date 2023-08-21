import useNavigation from '../hooks/useNavigation';

/*
	This component is here to decide which pages should be displayed and which
	should not. When the initial page is loaded we create lets say 3 `Route`
	components. 

	1 => About, 2 => Prices, 3 => Contact

	To display these components on their respective routes, The `Route` component
	checks to see if the current path (let's say /tacos) is equal to whatever
	passed in (let's say /about). If the paths are the same we pass in the given
	child (in this case it would be `AboutPage` component). If not, then we just
	return null and don't render anything.
*/
function Route({ path, children }) {
	const { currentPath } = useNavigation()

	if (path === currentPath) {
		return children;
	}

	return null;
}

export default Route;
