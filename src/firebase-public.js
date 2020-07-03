import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  // Paste here your Firebase credential
  // Rename this file as 'firebase.js'
};
// Initialize Firebase
const reactFirebase = firebase.initializeApp(firebaseConfig);
export const db = reactFirebase.firestore();
