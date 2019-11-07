import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
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

export const createRoomImage = async (images, roomId) => {
    const arryImage = [];
    await firebase.storage().ref(`images/${roomId}/img01`).put(images.img1.file);
    await firebase.storage().ref(`images/${roomId}/img02`).put(images.img2.file);
    await firebase.storage().ref(`images/${roomId}/img03`).put(images.img3.file);
    await firebase.storage().ref(`images/${roomId}/img04`).put(images.img4.file);
    await firebase.storage().ref(`images/${roomId}/img05`).put(images.img5.file);
    let idx = 0;
    await Promise.all(
        Object.values(images).map( async () => {
            idx += 1;
            await firebase.storage()
                    .ref(`images/${roomId}`)
                    .child(`img0${idx}`)
                    .getDownloadURL()
                    .then(url => {
                        arryImage.push(url);
                    })        
        })
    );
    return arryImage;
};

export const saveRoomInUser = async (roomId) => {
    await auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
            const userRef = firestore.doc(`users/${userAuth.uid}`);
            try {
                await userRef.update({savelist:firebase.firestore.FieldValue.arrayUnion(roomId)});
            } catch(error) {
                console.log(error.message);
            }
        }
      });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const fcProvider = new firebase.auth.FacebookAuthProvider();
export const signInwithFacebook =  () => auth.signInWithPopup(fcProvider);
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;