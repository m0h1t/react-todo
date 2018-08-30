import React, { Component } from 'react';
import '../styles/toDo.css';

export default class ToDo extends Component {
  render() {
    return (
      <div className="col col-md-4 mb-3">
        <div className="card m-2 p-2">
          <div className="card-body pt-4 text-center">
            <span className="card-text">{this.props.item.value}</span>
          </div>
          <button
            onClick={() => this.props.onDelete(this.props.item.id)}
            // className="btn btn-danger btn-sm deleteButton"
            className="close deleteButton px-1"
            aria-label="Close"
          >
            {/* <i className="fa fa-times" /> */}
            <span aria-hidden="true">&times;</span>
          </button>
          <button
            onClick={this.props.onComplete.bind(this, this.props.item)}
            className={`btn ${this._getButtonClass.call(
              this
            )}  btn-sm m-2 mt-auto`}
          >
            {this._doneButton.call(this)}
          </button>
        </div>
      </div>
    );
  }

  _doneButton() {
    const { complete } = this.props.item;
    return complete ? 'Done' : 'Not Done';
  }

  _getButtonClass = () => {
    const { complete } = this.props.item;
    return complete ? 'btn-success disabled' : 'btn-danger';
  };
}
