import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
// TODO move to .env
const firebaseConfig = {
    apiKey: "AIzaSyB__UhGmfqRFh8LxnlNTf-lUXs6S69V-oQ",
    authDomain: "seo-manager-a09fe.firebaseapp.com",
    projectId: "seo-manager-a09fe",
    storageBucket: "seo-manager-a09fe.appspot.com",
    messagingSenderId: "219735850887",
    appId: "1:219735850887:web:67f9951f05cc2281555d22",
    measurementId: "G-GTF6B9PQZ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
