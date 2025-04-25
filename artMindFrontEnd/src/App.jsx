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


function App() {

  return (
    <>
     <h1>ARTMIND FRONT END</h1>
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
        <Route path="/artwork/all" element={<AllArtwork />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App
