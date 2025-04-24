import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState()
    const nav = useNavigate();
    const {authenticateUser} = useContext(AuthContext)

    //function to send a POST to login a user in the DB
    function handleLogin(event) {
        event.preventDefault()
        const userToLogin = {username, email, password}
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/login`, userToLogin)
            .then((res) => {
                console.log("user login in the DB", res.data)
                localStorage.setItem("authToken", res.data.authToken)
                return authenticateUser()
            })
            .then(()=>{
                nav("/profile");
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(err.response.data.errorMessage);
            });
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label>Username :
                <input type="text" value={username} placeholder="Enter a username" onChange={(e)=>{setUsername(e.target.value)}}></input>
            </label>
            <label>Email :
                <input type="text" value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}></input>
            </label>
            <label>Password :
                <input type="password" value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            </label>
            <button>Login</button>
        </form>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
        <p>New here ? <Link to="/signup">Signup</Link></p>
    </div>
  )
}

export default Login