import React, { Component } from 'react';

class Task extends Component {
  state = {};
  render() {
    const { onComplete, onDelete } = this.props;
    return (
      <div>
        <input type="checkbox" onClick={() => onComplete(this.props.task.id)} />
        {this.props.task.description}
        <button onClick={() => onDelete(this.props.task.id)}>Delete</button>
      </div>
    );
  }
}

export default Task;
