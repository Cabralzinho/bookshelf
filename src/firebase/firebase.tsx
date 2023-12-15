// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0nsn7N6_Jl5B5pIWLJZoRgcVBEEeZ7rI",
  authDomain: "bookshelf-fe06b.firebaseapp.com",
  projectId: "bookshelf-fe06b",
  storageBucket: "bookshelf-fe06b.appspot.com",
  messagingSenderId: "815336656934",
  appId: "1:815336656934:web:33af6e0467357f1253d6e7",
  measurementId: "G-1NKXKNEGY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const user = auth.currentUser;

export const analytics = getAnalytics(app);

export const storage = getStorage(app);