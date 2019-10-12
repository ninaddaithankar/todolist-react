import React from 'react';
import TodoComponent from './TodoComponent';


class Todos extends React.Component{
  render()
  {
    return this.props.todos.map((todo)=>(
        <TodoComponent key={todo.id} todo={todo} markComplete={this.props.markComplete}
        removeTodo={this.props.removeTodo}/>
    ));
  }
  
}

export default Todos;
