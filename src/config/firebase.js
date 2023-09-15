// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#favailable-libraries
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
const app = initializeApp( firebaseConfig);
const auth = getAuth(app);

const signupUser = (email, password, age, username) => {

console.log("email", email,"password", password, "age", age, "username", username)

// const response = createUserwithEmailAndPassword(auth, email, password)

createUserWithEmailAndPassword(auth,email,password)


.then(userCredential => {
console.log( "user", userCredential)
alert("Successfully signed up")

  navigate('/');
})
// when promise reject
.catch((error) => {
console.log("firebase signup user error: ", error.message)
alert(error.message)

})
// console. log( "createUserWithEmailAndPassword res:
// , response)
}

const signInUser = (email, password, username) => {

  console.log("email", email,"password", password, "username", username)
  
  // const response = createUserwithEmailAndPassword(auth, email, password)
  
  signInWithEmailAndPassword(auth,email,password)
  
  .then(userCredential => {
  console.log( "user", userCredential)
  // alert("Successfull Signed In")
  alert("Welcome", email)
  })
  
  .catch((error) => {
  console.log("firebase signup user error: ", error.message)
  alert(error.message)
  })
  // console. log( "createUserWithEmailAndPassword res:
  // , response)
  
  }

export {signupUser, signInUser}
