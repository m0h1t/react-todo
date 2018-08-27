import React, { Component } from 'react';

export default class ToDo extends Component {
  render() {
    return (
      <div
        style={{ fontFamily: 'Product Sans', width: '18rem' }}
        className="card m-2 p-2"
      >
        <span className="card-text">{this.props.item.value}</span>
        <button
          onClick={this.props.onComplete.bind(this, this.props.item)}
          className={`btn ${this._getButtonClass.call(this)}  btn-sm m-2`}
        >
          {this._doneButton.call(this)}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
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
