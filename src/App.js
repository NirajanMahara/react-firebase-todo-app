import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Wake up at 5AM', 'Workout till 5:30']);

  return (
    <div className="App">
      <h1> React Firebase TODO App 🚀</h1>

      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
