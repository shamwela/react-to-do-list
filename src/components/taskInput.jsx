import React, { Component } from 'react';

class TaskInput extends Component {
  state = {};

  render() {
    return (
      <form>
        <input type="text" name="title" />
        <input type="submit" value="Add task" onClick={this.props.onAddTask} />
      </form>
    );
  }
}

export default TaskInput;
