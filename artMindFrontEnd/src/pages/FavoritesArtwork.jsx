import React, { useEffect } from 'react'

const FavoritesArtwork = () => {
    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_API_URL}/fav/favorite`, { artworkId: artwork._id })
            .then((res) => {
            console.log("Saved to favorites:", res.data);
  })
            .catch(err => {
            console.error("Error saving favorite:", err);
  });
    })

  return (
    <div>
        <button onClick={()=>saveFavorite(artwork._id)}>💖</button>
    </div>
  )
}

export default FavoritesArtwork