import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import AllArtwork from './pages/AllArtwork'
import Footer from './components/Footer'
import ProtectedRoutes from './components/ProtectedRoutes'
import DailyArtwork from './pages/DailyArtwork'
import ArtworkDetailsPage from './pages/ArtworkDetailsPage'
import EditAccount from './pages/EditAccount'
import { useEffect, useState } from 'react'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

   // Toggle dark mode
   const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
   }

   useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
     <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
            }
            />
            <Route 
          path="/edit-account" 
          element={
            <ProtectedRoutes>
              <EditAccount />
            </ProtectedRoutes>
            }
            />
        <Route path="/artwork/all" element={<AllArtwork />} />
        <Route path="/daily-artwork" element={<DailyArtwork />} />
        <Route path="/artwork/:artworkId" element={<ArtworkDetailsPage />} />
      </Routes>
     <Footer />
     </div>
  )
}

export default App
