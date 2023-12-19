import css from './Stats.module.css';

const Stats = ({ total, completed }) => (
  <div className={css.container}>
    <p className={css.item}>
      <span className={css.value}>{total}</span>
      <span className={css.label}>Total</span>
    </p>
    <p className={css.item}>
      <span className={css.value}>{completed}</span>
      <span className={css.label}>Completed</span>
    </p>
  </div>
);

export { Stats };
