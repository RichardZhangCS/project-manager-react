import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFirebaseConfig } from './backend/firebase-config';
import { initializeApp } from 'firebase/app';
import { matchProjectManagerToFirestore } from './backend/firestore';
import projectManager from './project-logic/projectmanager';

initializeApp(getFirebaseConfig());
matchProjectManagerToFirestore().then(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
