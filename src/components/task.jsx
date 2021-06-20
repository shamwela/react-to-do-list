import React, { Component } from 'react';
import './task.css';

class Task extends Component {
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
      <div className="task">
        <input
          className="task-checkbox"
          type="checkbox"
          onClick={() => onComplete(this.props.task)}
        />
        <label className="task-description" for='task-checkbox'>
          {this.outputTaskDescription()}
        </label>
        <button
          className="delete-button"
          onClick={() => onDelete(this.props.task.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
