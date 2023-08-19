// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from './firebase.auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-ygwjG9SWMN_Pjz3kljL3dSc3WVM3Wo",
  authDomain: "testproject-18f5e.firebaseapp.com",
  projectId: "testproject-18f5e",
  storageBucket: "testproject-18f5e.appspot.com",
  messagingSenderId: "141949547520",
  appId: "1:141949547520:web:5ccb4a36e961863012d4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)