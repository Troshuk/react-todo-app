import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './Container';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { TodoFilter } from './TodoFilter';
import { Stats } from './Stats';
import { Modal } from './Modal';

import initialTodos from 'data/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = item => {
    this.setState(({ todos }) => ({
      todos: [
        ...todos,
        {
          id: nanoid(),
          completed: false,
          ...item,
        },
      ],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  updateTodo = item => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === item.id ? { ...todo, ...item } : todo
      ),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  getCompletedCount = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const filterKeyword = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filterKeyword)
    );
  };

  getTotalCount = () => {
    return this.state.todos.length;
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Modal title="Add new ToDo">
          <TodoEditor onSubmit={this.addTodo} />
        </Modal>

        <Stats
          total={this.getTotalCount()}
          completed={this.getCompletedCount()}
        />

        <TodoFilter filter={filter} onChange={this.changeFilter} />

        <TodoList
          todos={this.getFilteredTodos()}
          onDelete={this.deleteTodo}
          onUpdate={this.updateTodo}
          onToggleComplete={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export { App };
