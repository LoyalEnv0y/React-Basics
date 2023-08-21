import Die from './components/Die';
import DoubleDice from './components/DoubleDice';
import Greeter from './components/Greeter';
import ListPicker from './components/ListPicker';
import ColorList from './components/ColorList';
import SlotMachine from './components/SlotMachine';
import ShoppingList from './components/ShoppingList';
import PropertyList from './components/PropertyList';
import Clicker from './components/Clicker';
import Form from './components/Form';

function App() {
	const fruits = ['Apple', 'Orange', 'Peach'];
	const colors = ['red', 'pink', 'purple', 'teal'];
	const items = ['🍎', '🍊', '🍌'];

	const shopListData = [
		{ _id: 1, item: 'eggs', quantity: 12, completed: false },
		{ _id: 2, item: 'milk', quantity: 1, completed: false },
		{ _id: 3, item: 'chicken breasts', quantity: 4, completed: false },
		{ _id: 4, item: 'paper', quantity: 20, completed: false },
		{ _id: 5, item: 'soy sauce', quantity: 1, completed: true },
		{ _id: 6, item: 'garlic', quantity: 15, completed: false },
	];

	const rentalData = [
		{ id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
		{ id: 129331, name: 'Lane Mountain Cabin', rating: 4.8, price: 250 },
		{ id: 129032, name: 'Cactus Retreat', rating: 4.75, price: 300 },
		{
			id: 129033,
			name: 'Redwood Treehouse Escape',
			rating: 4.9,
			price: 120,
		},
		{ id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 140 },
		{ id: 129035, name: 'Gold Miner Campground', rating: 4.69, price: 96 },
	];

	return (
		<>
			{/* <Greeter name="Bill" />
			<Die sides={6} />
			<ListPicker values={fruits} /> */}

			{/* <DoubleDice /> */}
			{/* <ColorList colors={colors} /> */}
			{/* <SlotMachine items={items} /> */}
			{/* <ShoppingList items={shopListData} /> */}
			{/* <PropertyList items={rentalData} /> */}
			{/* <Clicker /> */}
			{/* <Form /> */}
		</>
	);
}

export default App;
