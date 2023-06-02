// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApW-yxw9qxDwwyOpH04AgPhGCxda3gSw0",
  authDomain: "fir-course-ed2ca.firebaseapp.com",
  projectId: "fir-course-ed2ca",
  storageBucket: "fir-course-ed2ca.appspot.com",
  messagingSenderId: "1054107613144",
  appId: "1:1054107613144:web:d704b908a9d230a2dba4ad",
  measurementId: "G-D07EZ0BV81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
