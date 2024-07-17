import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Componets/AddTodoForm.css"; 

const AddTodoForm = ({ addTodo }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      addTodo({
        id: uuidv4(),
        taskDescription,
        priority,
      });
      setTaskDescription("");
      setPriority("Medium");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
