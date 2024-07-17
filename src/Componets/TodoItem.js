import React, { useState } from "react";
import "../Componets/TodoItems.css"; 

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.taskDescription);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      taskDescription: updatedTask,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p>{todo.taskDescription}</p>
      )}
      <div className="priority" style={{ backgroundColor: getColor(todo.priority) }}></div>
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

const getColor = (priority) => {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "yellow";
    case "Low":
      return "green";
    default:
      return "inherit";
  }
};

export default TodoItem;

