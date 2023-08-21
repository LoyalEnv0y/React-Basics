import Button from './Button';
import CheckBox from './CheckBox';

function TodoItem({ item, handleButtonClick, handleCheckClick }) {
	return (
		<ul>
			<CheckBox
				handleToggle={() => handleCheckClick(item.id)}
				item={item}
			/>
			{item.content}
			<Button text={'X'} handleClick={() => handleButtonClick(item.id)} />
		</ul>
	);
}

export default TodoItem;
