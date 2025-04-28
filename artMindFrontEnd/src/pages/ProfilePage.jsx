import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import DailyArtwork from './DailyArtwork';
import FavoritesArtwork from './FavoritesArtwork';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { currentUser} = useContext(AuthContext)
  console.log("here is the name of the current user on this profile page...", currentUser);


  return (
    <div className="profile-page">
      <h2>Welcome, {currentUser.username} !</h2>
      

          <Link to="/daily-artwork" className="landing-btn">
            Découvrir l'œuvre du jour
          </Link>
          <Link to="/artwork/all" className="landing-btn secondary">
            Explorer la galerie
          </Link>

      <section className="favorite-artworks">
        <h3>My favorite artworks</h3>
      </section>
    </div>
  )
}

export default ProfilePage