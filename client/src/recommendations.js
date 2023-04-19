  import React, { useState } from 'react';
  import axios from 'axios';
  import './recommendations.css'
  import { Button, Collapse } from 'react-bootstrap';

  function Recommendations() {
    const [limit, setLimit] = useState(null);
    const [targetTempo, setTargetTempo] = useState(null);
    const [seedGenres, setSeedGenres] = useState(null);
    const [response, setResponse] = useState(null);
    const [trackUris, setTrackUris] = useState([]);
    const [open, setOpen] = useState(false);

    function formatDuration(duration_ms) {
      const minutes = Math.floor(duration_ms / 60000);
      const seconds = Math.floor((duration_ms % 60000) / 1000);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleSubmit = event => {
      event.preventDefault();

      const queryParams = {
        limit: limit,
        target_tempo: targetTempo,
        seed_genres: seedGenres,
      };

      axios.get('http://localhost:8888/recommendations', {
        params: queryParams,
        withCredentials: true
      })
      .then(response => {
        setResponse(response.data);
        console.log(response.data)
        const uri = response.data.tracks.map(track => track.uri);
        setTrackUris(uri)
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };

    const handleSave = event => {
      axios.get('http://localhost:8888/create', {
        withCredentials: true
      })
      .then(response => {
        axios.get('http://localhost:8888/save', {
          params: {
            uris: trackUris
          },
          withCredentials: true
        })
        .then(response => {
          console.log(response.data)
          alert('Playlist created')
        })
        .catch(error => {
          console.error('Error', error)
        })
      })
      .catch(error => {
        console.error('Error', error);
      })
    }    
  

    return (
    <div className="form-cotanier">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h3 className="form-headings">Set the tempo</h3>
          <input type="number" id="target-tempo-input" class='type-1' value={targetTempo} onChange={event => setTargetTempo(event.target.value)} placeholder='140'/>

          <h3 className="form-headings">Amount of songs</h3>
          <label htmlFor="limit-input">Amount of songs</label>
          <input type="number" id="limit-input" class='type-1' value={limit} onChange={event => setLimit(event.target.value)} placeholder='20'/>

          <h3 className="form-headings">Genres</h3>
          <label htmlFor="seed-genres-input">Music genre</label>
          <input type="text" id="seed-genres-input" class='type-1' value={seedGenres} onChange={event => setSeedGenres(event.target.value)} placeholder='house,hip-hop,pop'/>

          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1db954', border: 'black', marginBottom: '10px'}}>Generate</button>

          <div className="button-wrapper">
                  <Button variant="info" onClick={() => setOpen(!open)}>Show Genres</Button>
                  <Collapse in={open}>
                    <div>
                      all the fucking genres here
                    </div>
                  </Collapse>
                </div>  
        </form>

        
        {response && (
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
                          <td><img src={track.album.images[0].url} class="album-img"/></td>
                          <td>{track.name}</td>
                          <td>{track.album.name}</td>
                          <td>{track.artists.map(artist => artist.name).join(', ')}</td>
                          <td>{formatDuration(track.duration_ms)}</td>
                              </tr>
                              ))}
                  </tbody>
                  <button type="button" className="btn btn-primary" style={{ backgroundColor: '#1db954', border: 'black', height: '50px', width: '100px'}} onClick={handleSave}>Save</button>
              </table>
        )}
       
        </div>  
        
      </div>
    );
  }

  export default Recommendations;
