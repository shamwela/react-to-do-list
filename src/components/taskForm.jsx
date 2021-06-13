import React, { Component } from 'react';
import './taskForm.css';
class TaskInput extends Component {
  state = {
    description: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state.description);
    this.setState({ description: '' });
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
          value={this.state.description}
          onChange={this.onChange}
        />
        <input type="submit" value="Add task" id="task-form-submit" />
      </form>
    );
  }
}

export default TaskInput;
