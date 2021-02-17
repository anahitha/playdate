import firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyASIhAMWp6G2ACTKlprl22jQxycZfH9Dwo",
    authDomain: "playdate-f7b0e.firebaseapp.com",
    databaseURL: "https://playdate-f7b0e.firebaseio.com",
    projectId: "playdate-f7b0e",
    storageBucket: "playdate-f7b0e.appspot.com",
    messagingSenderId: "696267307447",
    appId: "1:696267307447:web:d69694ef4496fa57791032"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore()