import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import CompletedTodos from "./components/CompletedTodos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Click the cross to remove.",
        isCompleted: false
      }
    ],
    completedTodos: []
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      isCompleted: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  removeTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  markComplete = id => {
    let newTodo;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          newTodo = todo;
          todo.isCompleted = !todo.isCompleted;
          if (todo.isCompleted) {
            this.addToComplete(todo);
          } else {
            this.removeFromComplete(todo);
          }
        }
        return todo;
      })
    });
    if (newTodo.isCompleted) this.removeTodo(id);
    else {
      const getCompletedTodo = this.state.completedTodos.map(todo => {
        if (todo.id === id) return todo;
      });
      this.addTodoAgain(getCompletedTodo);
    }
  };

  addTodoAgain = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  addToComplete = todo => {
    this.setState({
      completedTodos: [...this.state.completedTodos, todo]
    });
  };

  removeFromComplete = todo => {
    this.setState({
      completedTodos: [
        ...this.state.completedTodos.filter(
          stateTodo => stateTodo.id !== todo.id
        )
      ]
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <div style={barStyle}>TO BE COMPLETED</div>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    removeTodo={this.removeTodo}
                  />
                  <div style={barStyle}>COMPLETED</div>
                  <CompletedTodos
                    completedTodos={this.state.completedTodos}
                    markComplete={this.markComplete}
                    removeTodo={this.removeTodo}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path='/about' component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

const barStyle = {
  boxSizing: "border-box",
  padding: "0.5rem",
  fontSize: "0.5em",
  background: "cyan"
};

export default App;
