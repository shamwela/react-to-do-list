import React, { Component } from 'react';

class TaskInput extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type="text" name="title" />
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default TaskInput;
