import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import './Todo.css';
import db from './firebase';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
      </ListItem>
      <Button
        onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
      >
        ❌ Delete
      </Button>
    </List>
  );
}

export default Todo;
