import React, { Component } from 'react';
import './App.css';
import TaskInput from './components/taskInput';
import Tasks from './components/tasks';

class App extends Component {
  state = {
    tasks: [
      { id: 1, completed: true, description: 'Task 1' },
      { id: 2, completed: false, description: 'Task 2' },
    ],
  };

  handleDelete = (deletedId) => {
    const tasks = this.state.tasks.filter((task) => task.id !== deletedId);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <h1>React To-do List</h1>
        <TaskInput />
        <Tasks tasks={this.state.tasks} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
