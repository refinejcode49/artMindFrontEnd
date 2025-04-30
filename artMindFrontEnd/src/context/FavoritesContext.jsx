import { createContext, useState, useEffect } from "react";
import axios from "axios";

const FavoritesContext = createContext();

const FavoritesContextWrapper = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFavorites = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/fav/favorite`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setFavorites(response.data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const addFavorite = async (artworkId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/fav/favorite`,
        { artworkId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setFavorites((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Error adding favorite:", err);
    }
  };

  const removeFavorite = async (artworkId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/fav/${artworkId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setFavorites((prev) => prev.filter((fav) => fav.artwork._id !== artworkId));
    } catch (err) {
      console.error("Error removing favorite:", err);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, isLoading, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextWrapper };
