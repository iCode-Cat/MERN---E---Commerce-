import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

//Config
const config = {
    apiKey: "AIzaSyCwMpLEboho1si5xnC3WyjmiVqZaY1ube4",
    authDomain: "e-commerce-andrei-e8ae6.firebaseapp.com",
    projectId: "e-commerce-andrei-e8ae6",
    storageBucket: "e-commerce-andrei-e8ae6.appspot.com",
    messagingSenderId: "1042148031984",
    appId: "1:1042148031984:web:ecf630f5010962bb59b135"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();


  //Google Auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;