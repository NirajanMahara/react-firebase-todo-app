import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import Footer from './Footer.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log('🔥', input);

  // When the app loads, we need to listen to the database, and fetch new todos as they get added||removed
  // useEffect((function), [dependencies])
  useEffect(() => {
    // This code here fires when App.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        // console.log("I ran when the component loaded");
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // This will fire off when we click the button
    // console.log('👽', 'I am working');

    // Prevent default page refresh of the event
    event.preventDefault();

    // Add todos todo in db.collection todo field from the input field
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Clear the `<input />` field after the `<submit />`
    setInput('');

    // Console logging the todos array list empty string spam
    console.log(todos);
  };

  return (
    <div className="App">
      <h1> React Firebase TODO App 🚀</h1>

      <form>
        {/* <input value={input} onChange={(event) => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

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
          <Todo todo={todo} />
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
