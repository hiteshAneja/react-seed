import { Component } from 'react';

class TodoList extends Component {
  render () {
    return (
      <div className='todo-list'>
        <AddTodo />
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default TodoList;
