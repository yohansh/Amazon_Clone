import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWnjOOl3uU_RwuRG52ASmbxbsyYcFVzHY",
    authDomain: "challenge-76791.firebaseapp.com",
    projectId: "challenge-76791",
    storageBucket: "challenge-76791.appspot.com",
    messagingSenderId: "874279509151",
    appId: "1:874279509151:web:3709206a347235892d96aa",
    measurementId: "G-LVFJ8B2ZQM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db , auth};