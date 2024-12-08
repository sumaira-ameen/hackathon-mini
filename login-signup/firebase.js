import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, 
sendPasswordResetEmail, signOut,GoogleAuthProvider,
signInWithPopup} from  'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

const firebaseConfig = {
  //hide
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword,onAuthStateChanged,
signInWithEmailAndPassword,sendPasswordResetEmail,signOut,provider, 
signInWithPopup,getFirestore,db ,collection, addDoc}
