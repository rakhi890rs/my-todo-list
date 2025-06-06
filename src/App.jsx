import React, { useState } from 'react'

const App = () => {
  const[todos, settodos]=useState([
    {id:1, title: "kam krle bhai",isCompleted:false},
  ]);

  const[tittle,settitle]=useState("");
  const[completed,setcompleted]=useState(true);
  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input
        onChange={(e)=>settitle(e.target.value)}
        value={tittle}
         type="text"
          placeholder='tittle'/>
        <br /><br />
        <input
        checked={completed}
         onChange={(e)=>setcompleted(e.target.checked)} type="checkbox" />Completed
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App