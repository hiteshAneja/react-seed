import { Component, PropTypes } from 'react';

import Todo from './Todo.jsx';

class Todos extends Component {
  render () {
    const toggleAll = (this.props.todos.length > 0 ? (
        <input
          className="toggle-all"
          type="checkbox"
          ref='toggleall'
          checked={this.props.allCompleted}
          onClick={this.props.toggleAll} />) : '');

    return (
      <section className="main">
        {toggleAll}
        <ul class="todo-list">
          {
            this.props.todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  todo={todo}
                />
              );
            })
          }
        </ul>
      </section>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
