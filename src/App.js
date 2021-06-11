import './App.css';
import TaskInput from './components/taskInput';
import Tasks from './components/tasks';

function App() {
  return (
    <div className="App">
      <h1>React To-do List</h1>
      <TaskInput />
      <Tasks />
    </div>
  );
}

export default App;
