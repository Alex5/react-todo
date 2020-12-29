import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTJAI6od1dwvPIjbSRE9GrHmR_6Co0Qok",
    authDomain: "ilyin-react-todo.firebaseapp.com",
    databaseURL: "https://ilyin-react-todo-default-rtdb.firebaseio.com",
    projectId: "ilyin-react-todo",
    storageBucket: "ilyin-react-todo.appspot.com",
    messagingSenderId: "911169882246",
    appId: "1:911169882246:web:b10a587933ae4be6b2a907"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>q
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
