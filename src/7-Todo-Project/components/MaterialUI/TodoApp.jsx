// Material
import { List, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';

// React
import { useEffect, useState } from 'react';

// Local Components
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

// Libraries
import { v4 as uuid } from 'uuid';

const getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

function TodoApp() {
	const [todos, setTodos] = useState(getTodos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const deleteItem = (id) => {
		setTodos((curTodos) => curTodos.filter((t) => t.id !== id));
	};

	const toggleItem = (id) => {
		setTodos((curTodos) =>
			curTodos.map((t) =>
				t.id === id ? { ...t, completed: !t.completed } : t
			)
		);
	};

	const addItem = (value) => {
		setTodos((curTodos) => [
			...curTodos,
			{ id: uuid(), content: value, completed: false },
		]);
	};

	return (
		<>
			<Typography variant="h1" gutterBottom>
				Todos
			</Typography>

			<List className="todo-list">
				{todos.map((t) => (
					<TodoItem
						key={t.id}
						item={t}
						deleteItem={() => deleteItem(t.id)}
						toggleItem={() => toggleItem(t.id)}
					/>
				))}
			</List>

			<TodoInput addItem={addItem} />
		</>
	);
}

export default TodoApp;
