import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';
import { useState } from 'react';
import TextInput from './TextInput';

function TodoApp() {
	const [todos, setTodos] = useState([
		{ id: uuid(), content: 'Learn Node', completed: true },
		{ id: uuid(), content: 'Learn React', completed: false },
		{ id: uuid(), content: 'Learn TypeScript', completed: false },
		{ id: uuid(), content: 'Learn Next', completed: false },
		{ id: uuid(), content: 'Learn Docker', completed: false },
	]);

	const completeItem = (id) => {
		setTodos((curTodos) =>
			curTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteItem = (id) => {
		setTodos((curTodos) => curTodos.filter((todo) => todo.id !== id));
	};

	const addItem = (value) => {
		setTodos([...todos, { id: uuid(), content: value, completed: false }]);
	};

	return (
		<div>
			<h1>Todos</h1>

			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					item={todo}
					handleCheckClick={completeItem}
					handleButtonClick={deleteItem}
				/>
			))}

			<TextInput
				id={'new-todo'}
				labelText={'Add a New Todo'}
				name={'new-todo'}
				addItem={addItem}
			/>
		</div>
	);
}

export default TodoApp;
