import React, { Component } from 'react';
import './App.css';
import TaskInput from './components/taskForm';
import Tasks from './components/tasks';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    tasks: [
      {
        id: uuidv4(),
        description: 'Example task',
        completed: false,
      },
    ],
  };

  handleAddTask = (description) => {
    const tasks = [...this.state.tasks];
    tasks.push({
      id: uuidv4(),
      description,
      completed: false,
    });
    this.setState({ tasks });
  };

  handleComplete = (completedTask) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(completedTask);
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  handleDelete = (deletedId) => {
    const tasks = this.state.tasks.filter((task) => task.id !== deletedId);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="app">
        <h1 id="app-title">
          React <br />
          To-do List
        </h1>
        <TaskInput id="task-input" onAddTask={this.handleAddTask} />
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
