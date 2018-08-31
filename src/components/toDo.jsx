import React, { Component } from 'react';
import '../styles/toDo.css';

export default class ToDo extends Component {
  render() {
    return (
      <div className="col col-md-4 mb-3">
        <div className="card">
          <div className="card-body pt-4 text-center">
            <span className="card-text">{this._getShortString.call(this)}</span>
          </div>
          <button
            onClick={() => this.props.onDelete(this.props.item.id)}
            className="close deleteButton px-1"
            aria-label="Close"
          >
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
    return complete ? 'btn-success' : 'btn-danger';
  };

  _getShortString = () => {
    const { value } = this.props.item;
    return value.length <= 30 ? value : value.slice(0, 30) + '...';
  };
}
