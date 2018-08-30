import React, { Component } from 'react';
import ToDo from './toDo';
import AddToDo from './addToDo';
import '../styles/toDoList.css';

export default class ToDoList extends Component {
  render() {
    const {
      onAddItem,
      onDelete,
      onIncrement,
      onComplete,
      toDoList
    } = this.props;
    return (
      <div className="container" style={{ fontFamily: 'Product Sans' }}>
        <div className="row equal">
          <AddToDo onAddItem={onAddItem} key={1} />
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
      </div>
    );
  }
}
