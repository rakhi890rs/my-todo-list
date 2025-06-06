import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Create from './Components/Create';
import Read from './Components/Read';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Kamm krle bhai", isCompleted: false },
  ]);

  const addTodo = (title) => {
    const newTodo = { id: nanoid(), title, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main-container">
      <Create addTodo={addTodo} />
      <Read todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
