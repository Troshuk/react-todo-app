import React from 'react';
import css from './TodoItem.module.css';
import { Modal } from 'components/Modal';
import { TodoEditor } from 'components/TodoEditor';

const TodoItem = ({ item, onToggleComplete, onDelete, onUpdate }) => {
  return (
    <>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={item.completed}
        onChange={() => onToggleComplete(item.id)}
      />
      <p className={css.text}>{item.text}</p>

      <Modal title="Update ToDo" buttonTitle="Edit">
        <TodoEditor onSubmit={onUpdate} item={item} />
      </Modal>

      <button
        type="button"
        className={css.button}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </>
  );
};

export { TodoItem };
