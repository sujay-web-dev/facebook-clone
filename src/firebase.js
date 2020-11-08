import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWNnChE-X49dHfLiz63DJnFTR4UIX36YQ",
  authDomain: "sujay-facebook.firebaseapp.com",
  databaseURL: "https://sujay-facebook.firebaseio.com",
  projectId: "sujay-facebook",
  storageBucket: "sujay-facebook.appspot.com",
  messagingSenderId: "311733456837",
  appId: "1:311733456837:web:e8c7a80b0e96c6d2cb85ac",
  measurementId: "G-6RQNZZQ6YE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
