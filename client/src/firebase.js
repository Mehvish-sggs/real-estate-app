// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ad96.firebaseapp.com",
  projectId: "mern-estate-2ad96",
  storageBucket: "mern-estate-2ad96.appspot.com",
  messagingSenderId: "656153433072",
  appId: "1:656153433072:web:9c2510850f7cc9ce094335",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
