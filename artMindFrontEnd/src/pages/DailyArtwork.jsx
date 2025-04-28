import React, { useContext } from 'react'
import { ArtworkContext } from '../context/ArtworkContext';
import { AuthContext } from '../context/AuthContext';

const DailyArtwork = () => {
    const { artworks, handleDeleteArtwork } = useContext(ArtworkContext);
    const { dailyArtwork } = useContext(ArtworkContext);
    const { currentUser } = useContext(AuthContext);

    if (!dailyArtwork){
        return <p>Loading the daily artwork... </p>
    }

  return (
    <div>
        <h2>The artwork of the day :</h2>
        <img
              src={dailyArtwork?.imageUrl}
              alt={dailyArtwork?.title}
              className="artwork-image"
            />
            <h3>Title: {dailyArtwork?.title}</h3>
            <h3>Artist: {dailyArtwork?.artist_display}</h3>
            <h3>Description:{dailyArtwork?.short_description}</h3>
    </div>
  )
}

export default DailyArtwork