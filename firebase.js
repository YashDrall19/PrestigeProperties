// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtb_19fIYKHfUvxSjW9CTulRpE7RNuEUI",
  authDomain: "prestigeproperties-bc499.firebaseapp.com",
  projectId: "prestigeproperties-bc499",
  storageBucket: "prestigeproperties-bc499.firebasestorage.app",
  // storageBucket: "prestigeproperties-bc499.appspot.com",
  messagingSenderId: "882079381309",
  appId: "1:882079381309:web:c4050b00ce0da5945af754",
  measurementId: "G-0TSXNS5B3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);