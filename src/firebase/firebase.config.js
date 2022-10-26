// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVfJ8oma7xVCY7FyIXqt1xINlQnhStulA",
    authDomain: "language-teaching-club.firebaseapp.com",
    projectId: "language-teaching-club",
    storageBucket: "language-teaching-club.appspot.com",
    messagingSenderId: "1090965468098",
    appId: "1:1090965468098:web:f331d151933b7800519c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;