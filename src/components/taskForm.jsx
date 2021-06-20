import React, { Component } from 'react';
import './taskForm.css';
class TaskInput extends Component {
  state = {
    description: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.description) {
      this.props.onAddTask(this.state.description);
      this.setState({ description: '' });
    }
  };

  onChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="task-form">
        <input
          type="text"
          name="taskDescription"
          id="task-form-input"
          placeholder="Add task"
          value={this.state.description}
          onChange={this.onChange}
          autoFocus
        />
        <input type="submit" value="Add task" id="task-form-submit" />
      </form>
    );
  }
}

export default TaskInput;
