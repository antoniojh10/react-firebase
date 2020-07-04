import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhdbpP3vr3f8DNF0MXZhVmp8g9Cemt8JI',
  authDomain: 'reactfirebase-67f51.firebaseapp.com',
  databaseURL: 'https://reactfirebase-67f51.firebaseio.com',
  projectId: 'reactfirebase-67f51',
  storageBucket: 'reactfirebase-67f51.appspot.com',
  messagingSenderId: '869011359399',
  appId: '1:869011359399:web:8a1c1ed91fdc1bfe0dfd82',
};
// Initialize Firebase
const reactFirebase = firebase.initializeApp(firebaseConfig);
export const db = reactFirebase.firestore();
