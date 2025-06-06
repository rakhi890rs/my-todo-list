import React from 'react';

const Read = ({ todos }) => {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ol>
  );
};

export default Read;
