// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr4qJ7KkPYev3w74jcZkyE-lVOinwXIkk",
  authDomain: "modern-tech-8faba.firebaseapp.com",
  projectId: "modern-tech-8faba",
  storageBucket: "modern-tech-8faba.appspot.com",
  messagingSenderId: "840626766241",
  appId: "1:840626766241:web:faf5d3fe07ac4bea130be0"
};

// Initialize Firebase

const auth = getAuth(initializeApp(firebaseConfig))

export default auth;