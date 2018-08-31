import React, { Component } from 'react';
import '../styles/addToDo.css';

class AddToDo extends Component {
  state = {
    toDoText: ''
  };

  _handleChange(event) {
    this.setState({ toDoText: event.target.value });
  }

  render() {
    return (
      <div className="col-md-4 mb-3">
        <div className="card m-2">
          <div className="card-content">
            <span className="card-title">Add a task here</span>
            <button
              onClick={() => this.props.onAddItem(this.state.toDoText)}
              className="btn btn-success btn-sm pull-right"
              disabled={!this.state.toDoText}
            >
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className="card-action">
            <input
              type="text"
              className="form-control"
              value={this.state.toDoText}
              onChange={this._handleChange.bind(this)}
              placeholder="Enter To-Do text here"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddToDo;
