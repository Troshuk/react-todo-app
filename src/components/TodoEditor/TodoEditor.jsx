import { Component } from 'react';
import css from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  hundleSubmit = e => {
    e.preventDefault();

    const { message } = this.state;

    if (!message.trim().length) {
      return;
    }

    this.props.onSubmit(message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <form className={css.form} onSubmit={this.hundleSubmit}>
        <textarea
          className={css.textarea}
          value={message}
          onChange={this.handleChange}
        />
        <button className={css.button}>Save</button>
      </form>
    );
  }
}

export { TodoEditor };
