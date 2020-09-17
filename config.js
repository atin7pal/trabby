import * as firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyC8x1SFWlGO7JZK3TapRScKjisjqoiFpbA",
    authDomain: "trabby-49d18.firebaseapp.com",
    databaseURL: "https://trabby-49d18.firebaseio.com",
    projectId: "trabby-49d18",
    storageBucket: "trabby-49d18.appspot.com",
    messagingSenderId: "731372029322",
    appId: "1:731372029322:web:6dbb49e2e088d6acef7473",
    measurementId: "G-4PTSTHV5SC"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp;