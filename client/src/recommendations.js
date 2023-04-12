  import React, { useState } from 'react';
  import axios from 'axios';
  import './recommendations.css'

  function Recommendations() {
    const [limit, setLimit] = useState(null);
    const [targetTempo, setTargetTempo] = useState(null);
    const [seedGenres, setSeedGenres] = useState(null);
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
        target_tempo: targetTempo,
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
          <label htmlFor="limit-input">Amount of songs</label>
          <input type="number" id="limit-input" class='type-1' value={limit} onChange={event => setLimit(event.target.value)} placeholder='20'/><br />

          <label htmlFor="target-tempo-input">Set the tempo</label>
          <input type="number" id="target-tempo-input" class='type-1' value={targetTempo} onChange={event => setTargetTempo(event.target.value)} placeholder='140'/><br />

          <label htmlFor="seed-genres-input">Music genre</label>
          <input type="text" id="seed-genres-input" class='type-1' value={seedGenres} onChange={event => setSeedGenres(event.target.value)} placeholder='house'/><br />

          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1db954', border: 'black'}}>Generate</button>
        </form>

        {response && (
          <div>
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
