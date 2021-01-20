import axios from 'axios';
import React, {useState} from 'react';
import './App.css';
import firebase from "firebase/app";
import {logIn, logOut} from "./api/firebaseAuth";

const client = axios.create({
    baseURL: 'http://localhost:8080', //server path
})

function App() {
    const [response, setResponse] = useState(`no data yet...`);
    const [authStatus, setAuthStatus] = useState('No Auth Status');
    const signIn = async () => {
        await logIn(
            "myemail@gmail.com",
            "123",
            message => setAuthStatus(message),
            message => setAuthStatus(message)
        )
    }
    const signOut = async () => {
        await logOut(
            message => setAuthStatus(message),
            message => setAuthStatus(message)
        )
    }
    const sendRequest = () => {
        if (firebase.auth().currentUser) {
            firebase.auth().currentUser?.getIdToken(true)
                .then((idToken) => {
                    client({
                        method: 'get',
                        url: '/',
                        headers: {
                            'AuthToken': idToken
                        }
                    }).then((res) => {
                        setResponse(res.data.message)
                    }).catch((error: Error) => {
                        setResponse(error.message)
                    })
                }).catch((error) => {
                setResponse("Error getting auth token")
            });
        } else {
            client({
                method: 'get',
                url: '/'
            }).then((res) => {
                setResponse(res.data.message)
            }).catch((error: Error) => {
                setResponse(error.message)
            })
        }
    };
    return (
        <div className="App">
            <p>{authStatus}</p>
            <button className="auth" onClick={signIn}>Sign In</button>
            <button className="auth" onClick={sendRequest}>Send request</button>
            <button className="auth" onClick={signOut}>Sign Out</button>
            <p>{response}</p>
        </div>
    );
}

export default App;
