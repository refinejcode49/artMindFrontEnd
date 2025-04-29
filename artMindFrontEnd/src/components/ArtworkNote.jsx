import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function ArtworkNote({ artworkId }) {
  const [note, setNote] = useState("");
  const { currentUser, authenticateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/notes/${artworkId}`,
        { content: note },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("ARTWORK ID :", artworkId)
      setNote("");
      authenticateUser(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default ArtworkNote;
