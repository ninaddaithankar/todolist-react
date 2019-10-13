import React from "react";
import TodoComponent from "./TodoComponent";

class CompletedTodos extends React.Component {
  render() {
    return this.props.completedTodos.map(todo => (
      <TodoComponent
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        removeTodo={this.props.removeTodo}
      />
    ));
  }
}

export default CompletedTodos;
