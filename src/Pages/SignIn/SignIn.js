import { useState } from "react"
import { signInUser } from "../../config/firebase"
import "../../assets2/styles/pages/Login.css"
import { useNavigate } from "react-router-dom"

function SignIn(props) {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const submit = () => {

    const signupUserRes = signInUser(email, password, username)
    console.log("signupUserRes ", signupUserRes)
  }
  return <div className="loginParentDiv">
    <h1>Login Page</h1> <input required className="input" onChange={(e) => {
      setUsername(e.target.value)
    }}
      value={username} placeholder="Username" />

    <input required className="input" onChange={(e) => {
      setEmail(e.target.value)
    }} placeholder="Email" value={email} />

    <input required className="input"
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      value={password} type="password"placeholder="Password" />
    <button className="button" onClick={submit} >Submit</button> </div>
}

export default SignIn;