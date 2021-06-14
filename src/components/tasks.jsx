import React, { Component } from 'react';
import Task from './task';
import './tasks.css';

class Tasks extends Component {
  state = {};
  render() {
    const { onComplete, onDelete } = this.props;
    return (
      <div id="tasks">
        {this.props.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Tasks;
