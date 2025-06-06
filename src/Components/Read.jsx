import React from 'react';
import './Read.css';

const Read = ({ todos, deleteTodo }) => {
  return (
    <div className="read-container">
      <h1><span className="highlight">Pending</span> Todos</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
