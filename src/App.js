import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import uuid from 'uuid';

class App extends React.Component{

  state = {
    todos : [
      {
        id : uuid.v4(),
        title : 'Click the cross to remove.',
        isCompleted : false
      }
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id : uuid.v4(),
      title : title,
      isCompleted : false
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }

  removeTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id!==id)]}
    )
  }

  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if(id === todo.id)
        {
          todo.isCompleted=!todo.isCompleted;
        }
        return todo;
      })
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={
              props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos = {this.state.todos} markComplete = {this.markComplete}
                   removeTodo={this.removeTodo}/>
                </React.Fragment>
              )
            }></Route>
            <Route path='/about' component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
