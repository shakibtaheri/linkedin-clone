// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD0_lwX0EXtRFIgA30JvysX4jraED_Cwk",
  authDomain: "linkedin-clone-shakib.firebaseapp.com",
  projectId: "linkedin-clone-shakib",
  storageBucket: "linkedin-clone-shakib.firebasestorage.app",
  messagingSenderId: "781603059862",
  appId: "1:781603059862:web:3a86973823b9eaeb1f2ab7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
