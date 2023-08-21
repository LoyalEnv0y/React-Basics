import { createContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

/*
	How the browser normally navigates: Whenever you enter a link in the address
	bar or when you click a link, 
	1 - ✉️ The browser will sent a GET request to that address.
	2 - 📬 The server then calls the router and that router processes the request,
		runs the middleware, and then sends an HTML page as a respond. 
	3 - 📭 The HTML page that was send back gets rendered. 🗑️ At this point all
		the existing JS variables and code is dumped.

	❗The last part is especially bad for when working with React because a
	traditional HTML page only does one request to get the page from the server
	and render it. However when a React application gets a request, The server
	first sends the index.html file and that file requests a bundle.js file
	(remember the .root element), and then all the data from the DB or API's
	(let's say posts) are sent to the user. And every time the user requests some
	other content (let's say images) all the index.html, bundle.js and API
	endpoints are requested again. What could be achieved with a single request
	using the traditional page is now achieved with at least 3 requests. This is
	bad because we want to make as little request as possible. There is a better
	and faster way to navigate in React

	There are two scenarios,
	1 - 🆕 When a user visits our website for the first time. During the initial
		load, we send the index.html file and bundle.js file no matter which page 
		user navigates to. We don't need to change how the browser works in this
		process.
	2 - 🧭 When a user navigates in our website. This can be achieved when a user
		is redirected from one page to other in our website, or when a user
		clicks on next or back. At this point, First we stop the default behavior
		of the browser to speed up the process. Then we look at where the link is
		supposed to go, update the browser URL (even though the navigation hasn't
		happened), Then finally we remove the existing components and load the
		appropriate components for the request. This way the loading process is
		reduced from 3 request to 1.

	⛔ The default behavior of links can be avoided by using the 
	`event.preventDefault()` function. Check the `Link` component.

	🪧 Since we are going to need to access the current url of the browser, we need
	to set a state for it in our context. To get the Path of the URL use the 
	`window.location.pathname` variable.

	🛣️ Changing the `window.location` object causes a full page refresh. However
	when we update the URL by adding a new route to the browser history like this
	=> `window.history.pushState({}, '', '/tacos');` browser will emit a new event
	called `popstate`. This will update the URL and it will prevent the browser
	from doing a full refresh. By adding a new `eventHandler` object to the window
	for the `popstate` event, we can always keep track of where the user is 
	currently located in our app. Check the `Navigation` component.
	
	🖼️ Swapping the components is easy since we only need to look at the current
	path and show only the components for that path. Check the `Route` component.
*/
function NavigationProvider({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handler = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handler);

		return () => window.removeEventListener('popstate', handler);
	}, []);

	const navigate = (to) => {
		window.history.pushState({}, '', to);
		setCurrentPath(to);
	};

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			{children}
		</NavigationContext.Provider>
	);
}

export default NavigationContext;
export { NavigationProvider };
