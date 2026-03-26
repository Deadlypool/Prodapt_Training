// import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    }) 
    const navigate = useNavigate()

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const storedUser = JSON.parse(localStorage.getItem("user"))

        if (storedUser && storedUser.email === login.email && storedUser.password === login.password) {
            navigate('/dashboard')
        } else {
            alert("Invalid credentials.")
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <p>Please Enter your credentials to Log in</p>

        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" onChange={(e) => setLogin({...login, email: e.target.value})} /> <br></br>
        <input type="password" placeholder="Password" onChange={(e) => setLogin({...login, password: e.target.value})} /> <br></br>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login