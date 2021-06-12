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
      <form onSubmit={this.handleSubmit} className="taskForm">
        <input
          type="text"
          name="taskDescription"
          className="task-input"
          value={this.state.description}
          onChange={this.onChange}
        />
        <input type="submit" value="Add task" className="btn" />
      </form>
    );
  }
}

export default TaskInput;
