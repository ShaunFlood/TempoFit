import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const joinedGenresString = genreData ? genreData.map((name) => name.genres.join(', ')).join(', ') : '';

    return(
        <div>
            <h1>genres Values</h1>
            {genreData ? (
                <p>
                    {joinedGenresString}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Genre;
