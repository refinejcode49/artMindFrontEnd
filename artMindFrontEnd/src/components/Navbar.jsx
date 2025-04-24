import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {isLoggedIn, handleLogout} = useContext(AuthContext)
  return (
    <nav>
        <Link to="/">
            <h3>NAVBAR</h3>
        </Link>
        <Link to="/artwork/all">
            <h3>All artwork</h3>
        </Link>

        {/*ternary to show the sign up and login btn if the user is not logged in*/}
        {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <>
          <Link to="/signup">
            <button>Sign up</button>
        </Link>
        <Link to="/login">
            <button>Login</button>
        </Link>
        
        </>}
    </nav>
  )
}

export default Navbar