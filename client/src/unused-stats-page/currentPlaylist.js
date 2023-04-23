import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './currentPlaylist.css'

const CurrentPlaylists = () => {
    const [currentPlaylistsData, setCurrentPlaylistData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/playlist', { withCredentials: true });
                setCurrentPlaylistData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (!currentPlaylistsData) {
        return <div>Loading...</div>
    }
    return (
        <div className="playlist-grid">
          {currentPlaylistsData.items.map((playlist) => (
            <div className="playlist" key={playlist.id}>
              {playlist.images.length > 0 && (
                <img src={playlist.images[0].url} alt={playlist.name} />
              )}
              <h2>{playlist.name}</h2>
            </div>
          ))}
        </div>
      );
};
export default CurrentPlaylists;