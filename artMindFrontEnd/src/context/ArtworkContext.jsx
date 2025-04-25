import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArtworkContext = createContext();

const ArtworkContextWrapper = ( {children} ) => {
    const [artworks, setArtworks] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        getAllArtworks();
    }, []);

    function getAllArtworks(){
        axios.get(`${import.meta.env.VITE_API_URL}/artwork/all`)
        .then((res)=>{
            console.log("all the artworks", res);
            setArtworks(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
    }

  return (
    <ArtworkContext.Provider value={{artworks, setArtworks}}>
            {children}
    </ArtworkContext.Provider>
    )

}
    
    export {ArtworkContext, ArtworkContextWrapper}