import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBxFkadUzKWa04qGYIWLWuC7hyhP0gPlmE",
    authDomain: "chat-a540a.firebaseapp.com",
    databaseURL: "https://chat-a540a.firebaseio.com",
    projectId: "chat-a540a",
    storageBucket: "chat-a540a.appspot.com",
    messagingSenderId: "656967516030",
    appId: "1:656967516030:web:553678ba7062035b5abd2f",
    measurementId: "G-NJBDCK1TL8"
};

firebase.initializeApp(config);
var fs = firebase.firestore();

const settings = {timestampsInSnapshots: true};
fs.settings(settings);

export const firestore = fs;
export const firebaseAuth = firebase.auth();
export const storage = firebase.storage().ref();