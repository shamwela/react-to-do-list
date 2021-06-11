import React, { Component } from 'react';
import './App.css';
import TaskInput from './components/taskForm';
import Tasks from './components/tasks';

class App extends Component {
  state = {
    tasks: [
      {
        id: Math.floor(Math.random() * 10000000000),
        completed: false,
        description: 'Task 1',
      },
    ],
  };

  handleAddTask = (description) => {
    // console.log(description);
    const tasks = [...this.state.tasks];
    tasks.push({
      id: Math.floor(Math.random() * 10000000000),
      completed: false,
      description,
    });
    this.setState({ tasks });
  };

  handleComplete = (completedId) => {};

  handleDelete = (deletedId) => {
    const tasks = this.state.tasks.filter((task) => task.id !== deletedId);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <h1>React To-do List</h1>
        <TaskInput onAddTask={this.handleAddTask} />
        <Tasks
          tasks={this.state.tasks}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
