import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopularityChart from './PopularityChart';
import './popularity.css'

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
            {popularityData ? (
                <div className="popularity-container">
                    <div className="chart"> 
                        <PopularityChart popularityData={popularityData} />
                    </div>
                        <div className="text">
                            <h2 className="title">Popularity</h2>
                                <p>
                                The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
                                </p>
                                <p>
                                Your average popularity level based on your top twenty tracks on spotify is {average}.
                                </p>
                            </div>
                    </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Popularity;