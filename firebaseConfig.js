// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh0KhOeF1Ha30jj67G6_RLeNmGlskRJMQ",
  authDomain: "signup-5ac18.firebaseapp.com",
  projectId: "signup-5ac18",
  storageBucket: "signup-5ac18.firebasestorage.app",
  messagingSenderId: "760916212297",
  appId: "1:760916212297:web:21d66a9c6501842cf05d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;