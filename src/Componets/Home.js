import React, { useState } from "react";
import TodoList from "../Componets/TodoList.js";
import AddTodoForm from "../Componets/AddTodoForm.js";
import "../Componets/Home.css"; // Import your CSS for styling

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to update a todo item
  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  // Function to filter todos by search term
  const filteredTodos = todos.filter((todo) =>
    todo.taskDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Home;


