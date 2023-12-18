import './TodoFilter.scss';

const TodoFilter = ({ filter, onChange }) => {
  return (
    <div className="TodoFilter">
      <label htmlFor="filter" className="TodoFilter__label">
        Filter By Name
      </label>
      <input
        type="text"
        className="TodoFilter__input"
        value={filter}
        onChange={onChange}
        id="filter"
      />
    </div>
  );
};

export { TodoFilter };
