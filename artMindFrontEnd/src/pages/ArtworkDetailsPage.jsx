import React, { useContext, useEffect, useState } from 'react'
import { ArtworkContext } from '../context/ArtworkContext';
import { AuthContext } from '../context/AuthContext';
import { FavoritesContext } from '../context/FavoritesContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtworkNote from '../components/ArtworkNote';


const ArtworkDetailsPage = () => {
    const { currentUser, authenticateUser } = useContext(AuthContext);
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)
    const [artwork, setArtwork] = useState("");
    const { artworkId } = useParams();
    const [notes, setNotes] = useState([]);

    const isFavorite = favorites.some((fav) => fav.artwork._id === artwork._id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(artwork._id);
    } else {
      addFavorite(artwork._id);
    }
  };

    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/artwork/${artworkId}`)
        .then((resp) => {
          console.log("One artwork details:", resp.data);
          setArtwork(resp.data);
        })
        .catch((err) => {
          console.log("Error fetching artwork", err);
        });
    }, [artworkId]);

   
     // Fetch notes for the artwork
  const getNotesForArtwork = async () => {
    const storedToken = localStorage.getItem("authToken");

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/notes/${artworkId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      console.log("Notes for artwork:", response.data);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (noteId) => {
    const storedToken = localStorage.getItem("authToken");
  
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/user/notes/delete/${noteId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log(`Note with ID ${noteId} deleted successfully.`);
      getNotesForArtwork(); // Refresh the notes list
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const updateNote = async (noteId, updatedContent) => {
    const storedToken = localStorage.getItem("authToken");
  
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/notes/update/${noteId}`,
        { content: updatedContent },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
  
      console.log(`Note with ID ${noteId} updated successfully.`);
      getNotesForArtwork(); // Refresh the notes list
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };



  useEffect(() => {
    getNotesForArtwork();
  }, [artworkId]);

  // Callback to refresh notes after adding a new note
  const handleNoteAdded = () => {
    getNotesForArtwork();
  };
    //if (!artwork) return <p>Loading artwork...</p>;
  
    return (
      <div className="artwork-detail-page">
        <img src={artwork.imageUrl} alt={artwork.title} className="artwork-details-image"/>
        <h3>Title: {artwork.title}</h3>
        <h3>Artist: {artwork.artist_display}</h3>
        <h3>Description: {artwork.short_description}</h3>

        <button onClick={handleClick}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>


        {/* Render notes */}
      <section className="artwork-notes">
        <h3>Notes:</h3>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note._id} className="note">
              <p>{note.content}</p>
              <small>By: {note.author}</small>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
              <button
          onClick={() => {
            const updatedContent = prompt("Enter updated note content:", note.content);
            if (updatedContent) {
              updateNote(note._id, updatedContent);
            }
          }}
        >
          Update
        </button>
            </div>
          ))
        ) : (
          <p>No notes available for this artwork.</p>
        )}
      </section>

        <ArtworkNote artworkId={artwork._id}/>
      </div>
    );
  };
  
  
  export default ArtworkDetailsPage;
