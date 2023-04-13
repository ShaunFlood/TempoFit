import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreChart from './genreChart';
import './genre.css'

const Genre = () => {
    const [genreData, setGenre] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/topartists', {withCredentials: true});
                setGenre(response.data.items); 
            } catch(error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])

    return(
        <div>
            {genreData ? (
                 <div className="energy-container">
                    <div className="chart"> 
                        <GenreChart genreData={genreData}/>
                    </div>
                    <div className="text">
                        <h2 className="title">Genre</h2>
                        <p>Information here</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Genre;
