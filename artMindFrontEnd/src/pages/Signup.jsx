import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate();

    //function to send a POST to create a user in the DB
    function handleSignup(event) {
        event.preventDefault()
        const userToCreateInDB = {username, email, password}
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/signup`, userToCreateInDB)
            .then((res) => {
                console.log("user created in the DB", res)
                nav("/login");
            })
            .catch((err) => {
                console.log(err);
            });

    }

  return (
    <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
            <label>Username :
                <input type="text" value={username} placeholder="Enter a username" onChange={(e)=>{setUsername(e.target.value)}}></input>
            </label>
            <label>Email :
                <input type="text" value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}></input>
            </label>
            <label>Password :
                <input type="password" value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            </label>
            <button>Signup</button>
        </form>
        <p>Already a member ? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup