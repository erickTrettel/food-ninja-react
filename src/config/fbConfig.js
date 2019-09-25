import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1w1HNQvrDrrwH8auAhqQollbeiSh4k7Y",
  authDomain: "foodninja-react.firebaseapp.com",
  databaseURL: "https://foodninja-react.firebaseio.com",
  projectId: "foodninja-react",
  storageBucket: "foodninja-react.appspot.com",
  messagingSenderId: "756654250981",
  appId: "1:756654250981:web:d058e64663b6f3808b2d0c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
