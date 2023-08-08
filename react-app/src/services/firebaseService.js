// import firebase from "firebase/app";
// import 'firebase/auth';

import { firebaseConfig } from "../config/firebase";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try{
        await signInWithPopup(auth, googleProvider)
    } catch (err) {
        console.error(err)
    }
}


