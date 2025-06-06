import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "kam krle bhai", isCompleted: false },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <Create addTodo={addTodo} />
      <hr />
      <h1>Pending Todos</h1>
      <Read todos={todos} />
    </div>
  );
};

export default App;
