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

    export  const createUserProfileDocument  = async(userAuth , additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        console.log(firestore.doc(`users/${userAuth.uid}`));
        const snapShot = await userRef.get();
        console.log(snapShot.exists())

        if(!snapShot.exists) {
            const {displayName , email } = userAuth;
            const createAt  =  new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createAt, 
                    ...additionalData , 
                })
            }catch(error){

                console.log('error creating user', error.message );
            }
        }
        return userRef;
    }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: ' select_account'})
 export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);


 export default firebase;