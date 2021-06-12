import React, { Component } from 'react';

class Task extends Component {
  state = {};

  outputTaskDescription = () => {
    const { description, completed } = this.props.task;
    if (completed) {
      return <del>{description}</del>;
    }
    return description;
  };

  render() {
    const { onComplete, onDelete } = this.props;
    return (
      <div>
        <input type="checkbox" onClick={() => onComplete(this.props.task)} />
        <span>{this.outputTaskDescription()}</span>
        <button onClick={() => onDelete(this.props.task.id)}>Delete</button>
      </div>
    );
  }
}

export default Task;
