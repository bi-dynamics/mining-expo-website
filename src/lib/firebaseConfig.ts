// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ieOO-HEl7GyhdDR1aj8_7yRjI5IRinM",
  authDomain: "mining-expo-bc804.firebaseapp.com",
  projectId: "mining-expo-bc804",
  storageBucket: "mining-expo-bc804.appspot.com",
  messagingSenderId: "62716428182",
  appId: "1:62716428182:web:25c49a91cf0b6be8aa67b7",
  measurementId: "G-J6Q77G3MC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};