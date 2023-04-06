import React, { useState, useEffect } from 'react';
import axios from 'axios'

const GeneratePlaylist = () => {
    const [generatedPlaylistsData, setgeneratedPlaylistData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/recommendations', { withCredentials: true });
                setgeneratedPlaylistData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (!generatedPlaylistsData) {
        return <div>Loading...</div>
    }
    return (
        <div>
        {generatedPlaylistsData.tracks.map((track) => (
            <div>
                <p>{track.name}</p>
            </div>
        ))}
      </div>
    );
};
export default GeneratePlaylist;