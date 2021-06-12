import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUtf25Yg_bzwaq0zm11lgPKx7kCeX2aTw",
    authDomain: "crwn-db-1098a.firebaseapp.com",
    projectId: "crwn-db-1098a",
    storageBucket: "crwn-db-1098a.appspot.com",
    messagingSenderId: "988187584621",
    appId: "1:988187584621:web:aff4d32621c872d351f764",
    measurementId: "G-4KHQ2YPSBQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;