import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { isLoading, isLoggedIn } = useContext(AuthContext);
    if (isLoading){
        return <p>Loading...</p>
    }
if (!isLoggedIn){
    return <Navigate to="/login" />

}

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoutes