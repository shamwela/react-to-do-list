import React, { Component } from 'react';
import Task from './task';
import './tasks.css';

const Tasks = ({ tasks, onComplete, onDelete }) => {
  return (
    <div id="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
