import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
    apiKey: "AIzaSyD-_LzkU12BMcXYrZ1d4-Ao6T3BS8veI4Y",
    authDomain: "dbgroup14-f6454.firebaseapp.com",
    projectId: "dbgroup14-f6454",
    storageBucket: "dbgroup14-f6454.appspot.com",
    messagingSenderId: "1015783084360",
    appId: "1:1015783084360:web:b044f16a3f493d3190637d",
    measurementId: "G-GBPN8VYSNB"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;