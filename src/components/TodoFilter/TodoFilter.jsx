import css from './TodoFilter.module.css';

const TodoFilter = ({ filter, onChange }) => {
  return (
    <div className={css.container}>
      <label htmlFor="filter" className={css.label}>
        Filter By Name
      </label>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={onChange}
        id="filter"
      />
    </div>
  );
};

export { TodoFilter };
