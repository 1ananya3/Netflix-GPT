// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXcUvGUcVv1vK1tLbh8mVlEyQqEoCdDAE",
  authDomain: "netflixgpt-76cf9.firebaseapp.com",
  projectId: "netflixgpt-76cf9",
  storageBucket: "netflixgpt-76cf9.firebasestorage.app",
  messagingSenderId: "1032385701784",
  appId: "1:1032385701784:web:79490dcc602b0e19a22ded",
  measurementId: "G-SJSXZZZDQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
