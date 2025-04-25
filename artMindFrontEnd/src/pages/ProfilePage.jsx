import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProfilePage = () => {
  const { currentUser} = useContext(AuthContext)
  console.log("here is the name of the current user on this profile page...", currentUser);


  return (
    <div className="profile-page">
      <h2>Welcome, {currentUser.username} !</h2>

    </div>
  )
}

export default ProfilePage