import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firestore = firebase.firestore();

firestore.collection('users').doc('SRgjBlIFxwa9lKqCSasq').collection(cartItems).doc('0CTvS5hQbXNL2hQ3heHC')