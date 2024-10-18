// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2Ufr7oSwohtMVcf5hQlH6qfEb2PUBuyA",
    authDomain: "webcc-1b793.firebaseapp.com",
    projectId: "webcc-1b793",
    storageBucket: "webcc-1b793.appspot.com",
    messagingSenderId: "141003318423",
    appId: "1:141003318423:web:8d8c5f8d5620bd783ef5d2"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
