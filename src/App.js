import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
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

    // Clear the `<input />` field after the `<submit />`
    setInput('');

    // Console logging the todos array list empty string spam
    console.log(todos);
  };

  return (
    <div className="App">
      <h1> React Firebase TODO App 🚀</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button disabled={!input} type="submit" onClick={addTodo}> Add todo </button> */}
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
