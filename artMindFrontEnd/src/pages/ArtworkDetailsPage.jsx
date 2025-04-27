import React, { useContext } from 'react'
import { ArtworkContext } from '../context/ArtworkContext';
import { AuthContext } from '../context/AuthContext';

const ArtworkDetailsPage = () => {
    const { artwork, setArtwork } = useContext(ArtworkContext);
    const { currentUser } = useContext(AuthContext);


  return (
    <div>
        <div className="artwork-detail-page">
      <h2>Artwork details</h2>
      {artwork.map((oneArt) => {
        console.log("One Art:", oneArt);

        return (
          <div key={oneArt._id} className="artwork-card">
            <img
              src={oneArt.imageUrl}
              alt={oneArt.title}
            />
            <h3>Title: {oneArt.title}</h3>
            <h3>Artist: {oneArt.artist_display}</h3>
            <h3>Description:{oneArt.short_description}</h3>
            <FavoritesArtwork />
            
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default ArtworkDetailsPage