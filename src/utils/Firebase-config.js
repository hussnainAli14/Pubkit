// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  arrayUnion,
  arrayRemove,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
  where,
  query,
  getDoc,
  distinct,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByVRUwal5RjVJmwHlK7rWUBvrTOPK65GI",
  authDomain: "pubkit-37bc7.firebaseapp.com",
  projectId: "pubkit-37bc7",
  storageBucket: "pubkit-37bc7.appspot.com",
  messagingSenderId: "556548772898",
  appId: "1:556548772898:web:c3bdeba3cda6f71552667b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  distinct,
  auth,
  firebase,
  where,
  arrayUnion,
  arrayRemove,
  query,
  getDoc,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  orderBy,
  deleteDoc,
  onSnapshot,
};
