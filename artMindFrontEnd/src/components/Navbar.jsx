import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">
            <h3>NAVBAR</h3>
        </Link>
        <Link to="/signup">
            <button>Sign up</button>
        </Link>
        <Link to="/login">
            <button>Login</button>
        </Link>
    </div>
  )
}

export default Navbar