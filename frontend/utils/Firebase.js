import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginedunexa.firebaseapp.com",
  projectId: "loginedunexa",
  storageBucket: "loginedunexa.firebasestorage.app",
  messagingSenderId: "858326671127",
  appId: "1:858326671127:web:3a5e922406fad31d9b2152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}