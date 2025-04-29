import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArtworkContext = createContext();

const ArtworkContextWrapper = ( {children} ) => {
    const [artwork, setArtwork] = useState(null);
    const [artworks, setArtworks] = useState([]);
    const [dailyArtwork, setDailyArtwork] = useState(null);
    const nav = useNavigate();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/artwork/all`)
        .then((res)=>{
            console.log("all the artworks", res);
            setArtworks(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
        axios.get(`${import.meta.env.VITE_API_URL}/artwork/daily`)
            .then((response)=>{
                console.log("the daily artwork of today: ", response);
                setDailyArtwork(response.data)
            })
            .catch((err)=>{
                console.log(err)
            });
    }, []);


  return (
    <ArtworkContext.Provider value={{artworks, setArtworks, dailyArtwork, setDailyArtwork, artwork, setArtwork}}>
            {children}
    </ArtworkContext.Provider>
    )

}
    
    export {ArtworkContext, ArtworkContextWrapper}