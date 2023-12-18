import { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  hundleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <form className="TodoEditor" onSubmit={this.hundleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <button className="TodoEditor__button">Save</button>
      </form>
    );
  }
}

export { TodoEditor };
