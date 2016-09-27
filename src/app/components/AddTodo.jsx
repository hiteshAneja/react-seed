import { Component, PropTypes } from 'react';

class TodoList extends Component {
  addTodo (e) {
    if (e.keycode === 13 && e.target.value !== '') {
      this.props.onAddTodo(e.target.value);
      e.target.value = '';
    }
  }

  render () {
    return (
      <header class="header">
        <h1>todos</h1>
        <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus=""
        onKeyDown={this.addTodo()} />
      </header>
    );
  }
}

TodoList.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoList;
