import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const AuthContextWrapper = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const nav = useNavigate()

    // grab the token from local storage and verify it
    const authenticateUser = async ()=>{
        const tokenFromLocalStorage = localStorage.getItem("authToken")
        if(!tokenFromLocalStorage){
            setCurrentUser(null)
            setIsLoading(false)
            setIsLoggedIn(false)
        }else {
            try {
                const responseFromVerifyRoute = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, {
                    headers:{
                        authorization: `Bearer ${tokenFromLocalStorage}`
                    }
                })
                console.log("verify authenticate user function", responseFromVerifyRoute)
                setCurrentUser(responseFromVerifyRoute.data.payload)
                setIsLoading(false)
                setIsLoggedIn(true)
            } catch (error) {
                console.log(error)
                setCurrentUser(null)
                setIsLoading(false)
                setIsLoggedIn(false)
            }
        }
    } 
    // making a useEffect so everytime the page refresh we verify the token again
useEffect(()=>{
    authenticateUser()
}, [])

//to logout the user by deleting the token from the local storage
async function handleLogout() {
    localStorage.removeItem("authToken")
    await authenticateUser()
    nav("/login")
}

return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, isLoading, isLoggedIn, authenticateUser, handleLogout}}>
        {children}
    </AuthContext.Provider>
)
}

export {AuthContext, AuthContextWrapper}