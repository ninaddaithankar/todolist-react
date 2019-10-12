import React, { Component } from "react";

export default class TodoComponent extends Component {
  markComplete = e => {};
  getStyle = () => {
    return {
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={todoBox}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, this.props.todo.id)}
        />
        <span style={this.getStyle()}> {this.props.todo.title}</span>
        <button
          style={closeButton}
          onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
        >
          x
        </button>
      </div>
    );
  }
}

const todoBox = {
  backgroundColor: "#f4f4f4",
  padding: "1em",
  border: "1em",
  fontWeight: "400",
  textDecoration: "none"
};

const closeButton = {
  backgroundColor: "red",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer",
  color: "white"
};
