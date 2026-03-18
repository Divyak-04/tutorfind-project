// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAs7aLlbFKgezm-dihJ3x4oEutTMbfOAGo",
  authDomain: "tutorfind-32de2.firebaseapp.com",
  projectId: "tutorfind-32de2",
  storageBucket: "tutorfind-32de2.firebasestorage.app",
  messagingSenderId: "19602209400",
  appId: "1:19602209400:web:5505b3a6e9024f4b7d0b8d",
  measurementId: "G-RJEQPT6531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);