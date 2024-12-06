import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, 
sendPasswordResetEmail, signOut,GoogleAuthProvider,
signInWithPopup} from  'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBh45P7aPCs5fR2nSTgEcz9GPCRMnSHOdI",
  authDomain: "hackathon-coranu.firebaseapp.com",
  projectId: "hackathon-coranu",
  storageBucket: "hackathon-coranu.firebasestorage.app",
  messagingSenderId: "694733625117",
  appId: "1:694733625117:web:50e2d06d928a56bddcf3f4",
  measurementId: "G-B9DC282E89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword,onAuthStateChanged,
signInWithEmailAndPassword,sendPasswordResetEmail,signOut,provider, 
signInWithPopup,getFirestore,db ,collection, addDoc}