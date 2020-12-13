import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { DatabaseProvider } from './providers';
import Pages from './pages';
import './index.css';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DatabaseProvider>
                <Pages/>
            </DatabaseProvider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root'));