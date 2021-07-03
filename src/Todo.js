import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import db from './firebase';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
