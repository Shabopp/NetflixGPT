// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcAghyz9sYvd7XZI-XAx3r-oEDWqQ7Z2g",
  authDomain: "netflixgpt-de534.firebaseapp.com",
  projectId: "netflixgpt-de534",
  storageBucket: "netflixgpt-de534.appspot.com",
  messagingSenderId: "182740413672",
  appId: "1:182740413672:web:24373b7d6f2aca7bd92d5d",
  measurementId: "G-K68WD1S803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();