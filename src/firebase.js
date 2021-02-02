import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGk8k-3iPapZ97FmUinG0Lo-c6aICvKY4",
  authDomain: "project-83774.firebaseapp.com",
  databaseURL: "https://project-83774.firebaseio.com",
  projectId: "project-83774",
  storageBucket: "project-83774.appspot.com",
  messagingSenderId: "615038456377",
  appId: "1:615038456377:web:6fb1adeacd2c040d0673e8",
  measurementId: "G-Q8N82WP83B"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth= firebase.auth();
export { db, auth};