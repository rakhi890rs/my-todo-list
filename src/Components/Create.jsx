import React, { useState } from 'react';
import './Create.css';

const Create = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="create-container">
      <h1>
        Set <span className="highlight">Reminders</span> <br /> for tasks
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
