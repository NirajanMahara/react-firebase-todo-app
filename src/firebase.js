import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBP1rudWljejh8HHQuHs-U1MZ5LYQMtZ0Q',
  authDomain: 'react-firebase-todo-app-2021.firebaseapp.com',
  projectId: 'react-firebase-todo-app-2021',
  storageBucket: 'react-firebase-todo-app-2021.appspot.com',
  messagingSenderId: '210369003019',
  appId: '1:210369003019:web:c1103342dc6cd0c9bf110e',
  measurementId: 'G-Z43PX8VQY9',
});

const db = firebaseApp.firestore();

export default db;
