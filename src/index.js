import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAt95-8jPKpHZFLSJSafub2t0RqvTw1Hl4",
  authDomain: "cart-92aa2.firebaseapp.com",
  databaseURL: "https://cart-92aa2.firebaseio.com",
  projectId: "cart-92aa2",
  storageBucket: "cart-92aa2.appspot.com",
  messagingSenderId: "652385475907",
  appId: "1:652385475907:web:054da356e2db745313e3f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


