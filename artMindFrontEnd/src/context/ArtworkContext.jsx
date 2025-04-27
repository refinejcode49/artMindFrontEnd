import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ArtworkContext = createContext();

const ArtworkContextWrapper = ( {children} ) => {
    const [artworks, setArtworks] = useState([]);
    const [dailyArtwork, setDailyArtwork] = useState(null);
    const [artwork, setArtwork] = useState([]);
    const { artworkId } = useParams();
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

        axios.get(`${import.meta.env.VITE_API_URL}/artwork/${artworkId}`)
            .then((resp) =>{
                console.log("here is one details info of this artwork ", resp)
                setArtwork(resp.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, []);


  return (
    <ArtworkContext.Provider value={{artworks, setArtworks, dailyArtwork, setDailyArtwork, artwork, setArtwork}}>
            {children}
    </ArtworkContext.Provider>
    )

}
    
    export {ArtworkContext, ArtworkContextWrapper}