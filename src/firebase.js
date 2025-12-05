// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7Skk8SGC_Dr9SvzeIzBiel7CYc7fv9U",
  authDomain: "todoapp-1212a.firebaseapp.com",
  projectId: "todoapp-1212a",
  storageBucket: "todoapp-1212a.appspot.com",
  messagingSenderId: "867633863650",
  appId: "1:867633863650:web:a57f8727d4639c1844b7bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
