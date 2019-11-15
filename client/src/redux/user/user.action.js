import userActionTypes from './userActionTypes';
import {auth, firestore} from '../../firebase/firebase.util';

export const fetchUser = () => async dispatch => {
    await auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
            const userRef = firestore.doc(`users/${userAuth.uid}`);

            const snapShot = await userRef.get();
            try {
                await dispatch({type: userActionTypes.FETCHUSER, payload: snapShot.data()});
            } catch(error) {
                console.log(error.message);
            }
        }
      });
}

export const fetchUserId = () => async dispatch => {
    await auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
            const userRef = firestore.doc(`users/${userAuth.uid}`);

            const snapShot = await userRef.get();
            try {
                await dispatch({type: userActionTypes.FETCHUSERID, payload: snapShot.id});
            } catch(error) {
                console.log(error.message);
            }
        }
      });
}

