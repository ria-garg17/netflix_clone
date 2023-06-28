import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgJNkmUpOczOEeIvRgzLkDuiwZ1hjX6Ic",
  authDomain: "react-netflix-clone-95c9a.firebaseapp.com",
  projectId: "react-netflix-clone-95c9a",
  storageBucket: "react-netflix-clone-95c9a.appspot.com",
  messagingSenderId: "213623472106",
  appId: "1:213623472106:web:50aadb0c39ea07225b7c93",
  measurementId: "G-W8HLN3YW3F"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);