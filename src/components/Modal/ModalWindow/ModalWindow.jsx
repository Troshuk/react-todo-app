import { Component } from 'react';
import css from './ModalWindow.module.css';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClick);
  }

  handleEscapeClick = ({ key }) => key === 'Escape' && this.props.toggleModal();

  handleBackdropClick = ({ target, currentTarget }) =>
    target === currentTarget && this.props.toggleModal();

  render() {
    const { children, toggleModal, modalTitle } = this.props;

    return (
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.content}>
          <button className={css.close} onClick={toggleModal}>
            &times;
          </button>

          <h3 className={css.title}>{modalTitle}</h3>

          {children}
        </div>
      </div>
    );
  }
}

export { ModalWindow };
