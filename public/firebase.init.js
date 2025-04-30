// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaynkeNo6wYS9PH7SW75Q0fkdm3hSVMOg",
  authDomain: "conceptual-session-fire-auth.firebaseapp.com",
  projectId: "conceptual-session-fire-auth",
  storageBucket: "conceptual-session-fire-auth.firebasestorage.app",
  messagingSenderId: "18656035734",
  appId: "1:18656035734:web:5d319a372afdc22c8413b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
