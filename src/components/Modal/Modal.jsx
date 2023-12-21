import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from './ModalWindow';
import css from './ModalWindow/ModalWindow.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { children, buttonTitle, title } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <button className={css.button} onClick={this.toggleModal}>
          {buttonTitle ?? title}
        </button>
        {showModal &&
          createPortal(
            <ModalWindow toggleModal={this.toggleModal} modalTitle={title}>
              {React.cloneElement(children, { toggleModal: this.toggleModal })}
            </ModalWindow>,
            modalRoot
          )}
      </>
    );
  }
}

export { Modal };
