import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Wake up at 5AM', 'Workout till 5:30']);
  const [input, setInput] = useState('');
  console.log('🔥', input);

  const addTodo = (event) => {
    // This will fire off when we click the button
    console.log('👽', 'I am working');

    // Prevent default page refresh of the event
    event.preventDefault();

    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1> React Firebase TODO App 🚀</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
