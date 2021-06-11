import React, { Component } from 'react';

class Task extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="checkbox" />
        {/* Task description here */}
        <button>Delete</button>
      </div>
    );
  }
}

export default Task;
