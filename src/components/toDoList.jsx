import React, { Component } from 'react';
import ToDo from './toDo';

export default class ToDoList extends Component {
  state = {
    toDoText: ''
  };

  _handleChange(event) {
    this.setState({ toDoText: event.target.value });
  }

  render() {
    const {
      onAddItem,
      onDelete,
      onIncrement,
      onComplete,
      toDoList
    } = this.props;
    return (
      <div className="container">
        <button
          onClick={() => onAddItem(this.state.toDoText)}
          className="btn btn-primary btn-sm m-2 font-weight-bold"
        >
          Add To do
        </button>
        <input
          type="text"
          value={this.state.toDoText}
          onChange={this._handleChange.bind(this)}
          placeholder="Enter To-Do text here"
          className="input-md"
        />
        {toDoList.map(item => (
          <ToDo
            key={item.id}
            onDelete={onDelete}
            item={item}
            onIncrement={onIncrement}
            onComplete={onComplete}
          />
        ))}
      </div>
    );
  }
}
