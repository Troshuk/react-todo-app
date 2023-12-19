import css from './TodoList.module.css';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul className={css.list}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={`${css.item} ${completed ? css.completed : ''}`}
        >
          <input
            type="checkbox"
            className={css.checkbox}
            checked={completed}
            onChange={() => onToggleComplete(id)}
          />
          <p className={css.text}>{text}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
