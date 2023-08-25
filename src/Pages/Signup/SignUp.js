import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import '../../assets2/styles/pages/Login.css'
import { auth } from "../../config/firebase";


const SignUp = () => {

  //creating useState to store values passed by the user
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword (auth, email, password).then((userCredential) => 
    {console.log(userCredential);
    })

    .catch((error) => {
      console.log(error);
    });
    }
  return (
    <div className='sign-in container'>SignIn
    <form onSubmit={signUp}>
    <h1>Create an Account</h1>
    <input type="email" placeholder="Enter your Email" value={email}
    //values will not be shown here bcz there is no onchange

    onChange={(e) => setEmail(e.target.value)}
></input>

    <input type="password" placeholder="Enter your Password" value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>
   
    <button type="submit">Sign Up</button>


    </form>

    </div>

  )
}

export default SignUp
