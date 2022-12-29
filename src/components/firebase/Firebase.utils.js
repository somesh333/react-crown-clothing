import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

        apiKey: "AIzaSyBADBvdLW0GvbluYU8LYrKF5bq7zTJGpqs",
        authDomain: "big-share-79fe7.firebaseapp.com",
        projectId: "big-share-79fe7",
        storageBucket: "big-share-79fe7.appspot.com",
        messagingSenderId: "65326472813",
        appId: "1:65326472813:web:5fe78645bd8714a3f5e964"
     
    };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: ' select_account'})
 export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);


 export default firebase;