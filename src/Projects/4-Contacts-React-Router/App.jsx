import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Root, {
	loader as rootLoader,
	action as rootAction,
} from './routes/Root';
import Contact, { loader as contactLoader } from './routes/Contact';
import EditContact, { action as editAction } from './routes/Edit';
import { action as destroyAction } from './routes/Destroy';
import Index from './routes/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: 'contacts/:contactId',
				element: <Contact />,
				loader: contactLoader,
			},
			{
				path: 'contacts/:contactId/edit',
				element: <EditContact />,
				loader: contactLoader,
				action: editAction,
			},
			{
				path: 'contacts/:contactId/destroy',
				action: destroyAction,
				errorElement: <div>Oops! There was an error.</div>,
			},
			{ index: true, element: <Index /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
