import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser, isLoggedIn, handleLogout} = useContext(AuthContext)

  //console.log("Is Logged In:", isLoggedIn);
  //console.log("Current User:", currentUser);
  console.log("Profile Image URL:", currentUser?.profileImage);
  return (
    <nav className="navbar">
        <Link to="/">
            <h3>ART MIND</h3>
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

        {/*ternary to show the profilePage btn if the user is logged in*/}
        {isLoggedIn ? <Link to="/edit-account"><img
            src={currentUser.profileImage}
            alt="Profile-image"  
          /></Link> : <>
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