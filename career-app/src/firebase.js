import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmXR7o-m4LW-YYVlEaXiv_5PvyNIXNjtY",
    authDomain: "linkedin-clone-7379d.firebaseapp.com",
    projectId: "linkedin-clone-7379d",
    storageBucket: "linkedin-clone-7379d.appspot.com",
    messagingSenderId: "325023452636",
    appId: "1:325023452636:web:01075bb88456c7ca7e1319",
    measurementId: "G-W928PCMENE"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {auth,db}