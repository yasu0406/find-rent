import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import keys from '../config/keys';
import { ar } from 'date-fns/locale';

const config = {
    apiKey: keys.REACT_APP_API_KEY,
    authDomain: keys.REACT_APP_AUTH_DOMAIN,
    databaseURL: keys.REACT_APP_DATABASE_URL,  
    projectId: keys.REACT_APP_PROJECT_ID,
    storageBucket: keys.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: keys.REACT_APP_MESSAGING_SENDER_ID,
    appId: keys.REACT_APP_APP_ID
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

export const createRoomImage = async (images, roomId) => {
    const arryImage = [];
    await Promise.all(
        Object.values(images).map( async (img) => {
            await firebase.storage().ref(`images/${roomId}/${img.file.name}`).put(img.file);
            await firebase.storage()
                    .ref(`images/${roomId}`)
                    .child(img.file.name)
                    .getDownloadURL()
                    .then(url => {
                        arryImage.push(url);
                    })
        })
    );
    return arryImage;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const fcProvider = new firebase.auth.FacebookAuthProvider();
export const signInwithFacebook =  () => auth.signInWithPopup(fcProvider);
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;