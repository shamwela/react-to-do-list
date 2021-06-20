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
    const { task, onComplete, onDelete } = this.props;
    return (
      <div className="task">
        <input
          id={task.id}
          className="task-checkbox"
          type="checkbox"
          onClick={() => onComplete(task)}
        />
        <label className="task-description" htmlFor={task.id}>
          {this.outputTaskDescription()}
        </label>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
