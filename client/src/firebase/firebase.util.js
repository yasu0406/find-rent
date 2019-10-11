import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
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
