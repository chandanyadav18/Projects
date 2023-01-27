import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDr79Ei61a7XIs5OorK9VoVOfA760THCx8",
  authDomain: "whatsapp-firebase-ec877.firebaseapp.com",
  projectId: "whatsapp-firebase-ec877",
  storageBucket: "whatsapp-firebase-ec877.appspot.com",
  messagingSenderId: "720755534085",
  appId: "1:720755534085:web:4bb9e2073066475de36f6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
