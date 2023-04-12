import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Popularity = () => {
    const [popularityData, setPopularity] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/toptracks', {withCredentials: true});
                setPopularity(response.data.topTracks); 
            } catch(error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])

    const popularityString = popularityData ? popularityData.map((tracks) => tracks.popularity).join(', ') : '';
    const popularityArray = popularityString.split(', ')
    const popularityNumArray = popularityArray.map(Number);
    const sum = popularityNumArray.reduce((acc, val) => acc + val, 0); //setting acc to 0 then adding the val to it
    const average = sum / popularityNumArray.length;

    return(
        <div>
            <h1>Popularity Values</h1>
            {popularityData ? (
                <div>
                    <p>
                        {popularityData.map((tracks) => tracks.popularity).join(', ')}
                    </p>
                    <p>
                        {average}
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Popularity;