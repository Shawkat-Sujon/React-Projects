// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnvYlT3-KT14Rb-1eyoa7yyi8Y6bUG3RI",
  authDomain: "react-chat-31277.firebaseapp.com",
  projectId: "react-chat-31277",
  storageBucket: "react-chat-31277.appspot.com",
  messagingSenderId: "704453739090",
  appId: "1:704453739090:web:f8d5fd4879b4d4e76c158b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();