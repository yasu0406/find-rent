import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import key from '../config/keys';

const config = {
    // apiKey: key.REACT_APP_API_KEY,
    // authDomain: key.REACT_APP_AUTH_DOMAIN,
    // databaseURL: key.REACT_APP_DATABASE_URL,
    // projectId: key.REACT_APP_PROJECT_ID,
    // storageBucket: key.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: key.REACT_APP_MESSAGING_SENDER_ID,
    // appId: key.REACT_APP_APP_ID
    apiKey: "AIzaSyCCImeJumftjlTu-l8Wpey5kCb3DOy5oVs",
    authDomain: "find-19b2c.firebaseapp.com",
    databaseURL: "https://find-19b2c.firebaseio.com",
    projectId: "find-19b2c",
    storageBucket: "find-19b2c.appspot.com",
    messagingSenderId: "23825691849",
    appId: "1:23825691849:web:16f9bbd636f82916990918"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email, photoURL } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createAt,
                ...additionalData
            });
        } catch(error) {
            console.log(error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const fcProvider = new firebase.auth.FacebookAuthProvider();
export const signInwithFacebook =  () => auth.signInWithPopup(fcProvider);
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
