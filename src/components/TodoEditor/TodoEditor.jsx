import { Component } from 'react';
import css from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    text: '',
    ...this.props?.item,
  };

  handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };

  hundleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;

    if (!text.trim().length) {
      return;
    }

    this.props.onSubmit(this.state);

    this.setState({ text: '' });

    this.props?.toggleModal?.();
  };

  render() {
    const { text } = this.state;

    return (
      <form className={css.form} onSubmit={this.hundleSubmit}>
        <textarea
          className={css.textarea}
          value={text}
          onChange={this.handleChange}
        />
        <button className={css.button}>Save</button>
      </form>
    );
  }
}

export { TodoEditor };
