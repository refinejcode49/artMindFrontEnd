import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ArtworkContext } from '../context/ArtworkContext';

const AllArtwork = () => {
  const { artworks, handleDeleteArtwork } = useContext(ArtworkContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="all-artwork-page">
      <h2>All our Artwork</h2>
      {artworks.map((oneArtwork) => {
        return (
          <div key={oneArtwork._id} className="artwork-card">
            <img
              src={oneArtwork.imageURL}
              alt={oneArtwork.title}
            />
            <h3>Title: {oneArtwork.title}</h3>
            <h3>Artist: {oneArtwork.artist_display}</h3>
            <h3>Description:{oneArtwork.short_description}</h3>
            
            {/*oneArtwork.owner._id === currentUser?._id ? (
              <section>
                <Link to={`/edit-artwork/${oneArtwork._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteArtwork(oneArtwork._id)}>
                  Delete
                </button>
              </section>
            ) : null*/}
          </div>
        );
      })}
    </div>
  )
}

export default AllArtwork