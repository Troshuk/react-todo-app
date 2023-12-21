import { TodoItem } from 'components/TodoItem';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDelete, onUpdate, onToggleComplete }) => {
  return (
    <ul className={css.list}>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${css.item} ${todo.completed ? css.completed : ''}`}
        >
          <TodoItem
            item={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onToggleComplete={onToggleComplete}
          />
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
