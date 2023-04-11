import React, { useState } from 'react';
import axios from 'axios';
import './recommendations.css'

function Recommendations() {
  const [limit, setLimit] = useState(20);
  const [maxTempo, setMaxTempo] = useState(180);
  const [minTempo, setMinTempo] = useState(140);
  const [seedGenres, setSeedGenres] = useState('work-out');
  const [response, setResponse] = useState(null);

  function formatDuration(duration_ms) {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = Math.floor((duration_ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  const handleSubmit = event => {
    event.preventDefault();

    const queryParams = {
      limit,
      max_tempo: maxTempo,
      min_tempo: minTempo,
      seed_genres: seedGenres,
    };

    axios.get('http://localhost:8888/recommendations', {
      params: queryParams,
      withCredentials: true
    })
    .then(response => {
      setResponse(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="limit-input">Amount of songs:</label>
        <input type="number" id="limit-input" value={limit} onChange={event => setLimit(event.target.value)} /><br />

        <label htmlFor="max-tempo-input">Max Tempo:</label>
        <input type="number" id="max-tempo-input" value={maxTempo} onChange={event => setMaxTempo(event.target.value)} /><br />

        <label htmlFor="min-tempo-input">Min Tempo:</label>
        <input type="number" id="min-tempo-input" value={minTempo} onChange={event => setMinTempo(event.target.value)} /><br />

        <label htmlFor="seed-genres-input">Genre for playlist:</label>
        <input type="text" id="seed-genres-input" value={seedGenres} onChange={event => setSeedGenres(event.target.value)} /><br />

        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1db954', border: 'black'}}></button>
      </form>

      {response && (
        <div>
          <h2>Recommendations:</h2>
          <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Title </th>
                    <th>Album</th>
                    <th>Artists</th>
                    <th>Duration </th>
                </tr>
                </thead>
                <tbody>
                    {response.tracks.map(track => (
                        <tr key={track.id}>
                        <td><img src={track.album.images[0].url}/></td>
                        <td>{track.name}</td>
                        <td>{track.album.name}</td>
                        <td>{track.artists.map(artist => artist.name).join(', ')}</td>
                        <td>{formatDuration(track.duration_ms)}</td>
                            </tr>
                            ))}
                </tbody>
            </table>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
