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


function App() {

  return (
    <>
     <Navbar />
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
    </>
  )
}

export default App
