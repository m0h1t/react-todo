import React, { Component } from 'react';
import ToDoList from './toDoList';
import NavBar from './navbar';

export default class Main extends Component {
  state = {
    toDoList: []
  };

  _handleDelete = itemId => {
    const toDoList = this.state.toDoList.filter(item => item.id !== itemId);
    this.setState({ toDoList });
  };

  _handleComplete = item => {
    const toDoList = this.state.toDoList;
    const i = toDoList.indexOf(item);
    toDoList[i].complete = toDoList[i].complete === true ? false : true;
    this.setState({ toDoList });
  };

  _createNewTodo = text => {
    return { id: Date.now(), complete: false, value: text };
  };

  _handleAddTolist = toDoText => {
    const toDoList = this.state.toDoList;
    const item = this._createNewTodo(toDoText);
    toDoList.push(item);
    console.log(item);
    this.setState({ toDoList });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToDoList
          toDoList={this.state.toDoList}
          onComplete={this._handleComplete}
          onDelete={this._handleDelete}
          onAddItem={this._handleAddTolist}
        />
      </React.Fragment>
    );
  }
}
