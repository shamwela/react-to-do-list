import React, { Component } from 'react';
import Task from './task';

class Tasks extends Component {
  state = {};
  render() {
    const { task, onDelete } = this.props;
    return (
      <div>
        {this.props.tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default Tasks;
