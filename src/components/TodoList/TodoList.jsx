import './TodoList.scss';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={`TodoList__item ${
            completed ? 'TodoList__item--completed' : ''
          }`}
        >
          <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={() => onToggleComplete(id)}
          />
          <p className="TodoList__text">{text}</p>
          <button
            type="button"
            className="TodoList__btn"
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
