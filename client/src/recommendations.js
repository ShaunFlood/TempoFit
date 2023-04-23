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
          <label htmlFor="limit-input"></label>
          <input type="number" id="limit-input" class='type-1' value={limit} onChange={event => setLimit(event.target.value)} placeholder='20'/>

          <h3 className="form-headings">Genres</h3>
          <label htmlFor="seed-genres-input"></label>
          <input type="text" id="seed-genres-input" class='type-1' value={seedGenres} onChange={event => setSeedGenres(event.target.value)} placeholder='house,hip-hop,pop'/>

          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#7bc2ba', border: 'black', marginBottom: '10px', width: '140px'}}>Generate</button>
         

        </form>
          {response && response.tracks && response.tracks.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Title </th>
                  <th>Album</th>
                  <th>Artists</th>
                  <th>Duration     </th>
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
                  <td>
                  </td>
                  <td>
                  </td>
                </table>
                  ) : (
                      <div className="button-wrapper2">
            <Button variant="info" onClick={() => setOpen(!open)} style={{ backgroundColor: '#7bc2ba', width: '300px'}}>Show Genres</Button>
                <Collapse in={open}>
                  <div className="collapse-text">
                    <ul>
                      <li>acoustic</li>
                      <li>afrobeat</li>
                      <li>alt-rock</li>
                      <li>alternative</li>
                      <li>ambient</li>
                      <li>anime</li>
                      <li>black-metal</li>
                      <li>bluegrass</li>
                      <li>blues</li>
                      <li>bossanova</li>
                      <li>brazil</li>
                      <li>breakbeat</li>
                      <li>british</li>
                      <li>cantopop</li>
                      <li>chicago-house</li>
                      <li>children</li>
                      <li>chill</li>
                      <li>classical</li>
                      <li>club</li>
                      <li>comedy</li>
                      <li>country</li>
                      <li>dance</li>
                      <li>dancehall</li>
                      <li>death-metal</li>
                      <li>deep-house</li>
                      <li>detroit-techno</li>
                      <li>disco</li>
                      <li>disney</li>
                      <li>drum-and-bass</li>
                      <li>dub</li>
                      <li>dubstep</li>
                      <li>edm</li>
                      <li>electro</li>
                      <li>electronic</li>
                      <li>emo</li>
                      <li>folk</li>
                      <li>forro</li>
                      <li>french</li>
                      <li>funk</li>
                      <li>garage</li>
                      <li>german</li>
                      <li>gospel</li>
                      <li>goth</li>
                      <li>grindcore</li>
                      <li>groove</li>
                      <li>grunge</li>
                      <li>guitar</li>
                      <li>happy</li>
                      <li>hard-rock</li>
                      <li>hardcore</li>
                      <li>hardstyle</li>
                      <li>heavy-metal</li>
                      <li>hip-hop</li>
                      <li>holidays</li>
                      <li>honky-tonk</li>
                      <li>house</li>
                      <li>idm</li>
                      <li>indian</li>
                      <li>indie</li>
                      <li>indie-pop</li>
                      <li>industrial</li>
                      <li>iranian</li>
                      <li>j-dance</li>
                      <li>j-idol</li>
                      <li>j-pop</li>
                      <li>j-rock</li>
                      <li>jazz</li>
                      <li>k-pop</li>
                      <li>kids</li>
                      <li>latin</li>
                      <li>latino</li>
                      <li>malay</li>
                      <li>mandopop</li>
                      <li>metal</li>
                      <li>metal-misc</li>
                      <li>metalcore</li>
                      <li>minimal-techno</li>
                      <li>movies</li>
                      <li>mpb</li>
                      <li>new-age</li>
                      <li>new-release</li>
                      <li>opera</li>
                      <li>pagode</li>
                      <li>party</li>
                      <li>philippines-opm</li>
                      <li>piano</li>
                      <li>pop</li>
                      <li>pop-film</li>
                      <li>post-dubstep</li>
                      <li>power-pop</li>
                      <li>progressive-house</li>
                      <li>psych-rock</li>
                      <li>punk</li>
                      <li>punk-rock</li>
                      <li>r-n-b</li>
                      <li>rainy-day</li>
                      <li>reggae</li>
                      <li>reggaeton</li>
                      <li>road-trip</li>
                      <li>rock</li>
                      <li>rock-n-roll</li>
                      <li>rockabilly</li>
                      <li>romance</li>
                      <li>sad</li>
                      <li>salsa</li>
                      <li>samba</li>
                      <li>sertanejo</li>
                      <li>show-tunes</li>
                      <li>singer-songwriter</li>
                      <li>ska</li>
                      <li>sleep</li>
                      <li>songwriter</li>
                      <li>soul</li>
                      <li>soundtracks</li>
                      <li>spanish</li>
                      <li>study</li>
                      <li>summer</li>
                      <li>swedish</li>
                      <li>synth-pop</li>
                      <li>tango</li>
                      <li>techno</li>
                      <li>trance</li>
                      <li>trip-hop</li>
                      <li>turkish</li>
                      <li>work-out</li>
                      <li>world-music</li>
                    </ul>
                    </div>
                </Collapse>
          </div>  
                )}
        </div>
        
        

          <div className="button-wrapper1">
        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#00adb5', border: 'black', height: '50px', width: '100px', alignItem: 'centre'}} onClick={handleSave}>Save</button>
        <button onClick={() => window.location.href = 'http://localhost:8888/logout'} className="btn btn-primary" style={{ backgroundColor: '#00adb5', border: 'black', height: '50px', width: '100px', alignItem: 'centre', marginLeft: '10px'}}>Logout</button>
        <br />
        </div>
      </div>
      
    );
  }

  export default Recommendations;
