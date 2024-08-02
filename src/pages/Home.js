import React, { useState, useEffect } from 'react';
import '../pages/Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const handleAddTask = () => {
    if (taskDescription.trim() === '') return;

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: taskDescription, priority }),
    })
      .then(response => response.json())
      .then(data => {
        setTasks([...tasks, { id: data.id, description: taskDescription, priority }]);
        setTaskDescription('');
        setPriority('Medium');
      });
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      });
  };

  const handleUpdateTask = (id, newDescription, newPriority) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newDescription, priority: newPriority }),
    })
      .then(response => response.json())
      .then(() => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, description: newDescription, priority: newPriority } : task
        ));
      });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container home-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="form-group">
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
          className="form-control"
        />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="form-control"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={handleAddTask} className="btn">Add Task</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`task-item ${task.priority.toLowerCase()}`}>
            <span>{task.description}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
            <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">Delete</button>
            <button
              onClick={() => {
                const newDescription = prompt('Enter new description:', task.description);
                const newPriority = prompt('Enter new priority (High, Medium, Low):', task.priority);
                if (newDescription && newPriority) {
                  handleUpdateTask(task.id, newDescription, newPriority);
                }
              }}
              className="btn btn-warning"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
