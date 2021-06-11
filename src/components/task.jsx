import React, { Component } from 'react';

class Task extends Component {
  state = {};
  render() {
    const { description } = this.props.task;
    return (
      <div>
        <input type="checkbox" />
        {description}
        <button onClick={() => this.props.onDelete(this.props.task.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
