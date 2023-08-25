import { useState } from "react" 
import { signupUser } from "../../config/firebase";
import "../../assets2/styles/pages/Signup.css"
import { Navigate, useNavigate } from "react-router-dom";


function Signup(props) {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [username, setUsername] = useState("")

  const submit = () => {
   
    const signupUserRes = signupUser(email, password, age, username)
    console.log("signupUserRes ", signupUserRes) 
    
    navigate('/signin')
   
    }
      return <div>
        <h1>Signup Page</h1> <input onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username} placeholder="Username"/>
        <input onChange={(e) => {
            setAge(e.target.value)
          }}
          placeholder="Age" value={age}/>
          
        <input onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder="Email" value={email}/>
          
        <input 
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password} placeholder="Password"/>
<button onClick={submit} >Submit</button> </div>

}

export default Signup