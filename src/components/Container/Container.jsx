import css from './Container.module.css';

const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export { Container };
