// import firebase from "firebase/app";
// import 'firebase/auth';

import { firebaseConfig } from "../config/firebase";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt:'select_account' }); 
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export default firebase;

export const signInWithGoogle = async () => {
    try{
        await signInWithPopup(auth, googleProvider)
    } catch (err) {
        console.error(err)
    }
}


