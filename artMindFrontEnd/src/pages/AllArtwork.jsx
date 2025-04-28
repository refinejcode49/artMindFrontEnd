import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ArtworkContext } from '../context/ArtworkContext';
import FavoritesArtwork from './FavoritesArtwork';
import { Link, useParams } from 'react-router-dom';

const AllArtwork = () => {
  const { artworks, handleDeleteArtwork } = useContext(ArtworkContext);
  const { artworkId } = useParams();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="all-artwork-grid">
      <h2>All our Artwork</h2>
      {artworks.map((oneArtwork) => {
        //console.log("One Artwork:", oneArtwork);

        return (
         
          <div key={oneArtwork._id} className="artwork-item">
             <Link to="/artwork/{artworkId}">
            <img
              src={oneArtwork.imageUrl}
              alt={oneArtwork.title}
              className="artwork-image"
            />
            <div className="artwork-hover">
              <h3>Title: {oneArtwork.title}</h3>
              <h3>Artist: {oneArtwork.artist_display}</h3>
              <h3>Description:{oneArtwork.short_description}</h3>
            </div>
            </Link>
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