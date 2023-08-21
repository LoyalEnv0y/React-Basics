import AccordionPage from '../pages/AccordionPage';
import ButtonPage from '../pages/ButtonPage';
import DropdownPage from '../pages/DropDownPage';
import Route from '../components/Route';
import Sidebar from '../components/Sidebar';
import ModalPage from './ModalPage';
import TablePage from './TablePage';
import CounterPage from './CounterPage';

/*
	This is our main page. When a user navigates between our pages, this component
	will be rerendered because of the context. Out of all the `Route` components
	only the one with the appropriate URL will be displayed.
*/
function GuidePage() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<Sidebar />

			<div className="col-span-5">
				<Route path={'/'}>
					<AccordionPage />
				</Route>

				<Route path={'/button'}>
					<ButtonPage />
				</Route>

				<Route path={'/dropdown'}>
					<DropdownPage />
				</Route>

				<Route path={'/modal'}>
					<ModalPage />
				</Route>

				<Route path={'/table'}>
					<TablePage />
				</Route>

				<Route path={'/counter'}>
					<CounterPage />
				</Route>
			</div>
		</div>
	);
}

export default GuidePage;
