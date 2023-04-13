import Profile from "./profile";
import './dashboard.css'
import Recommendations from "./recommendations";
import Genre from "./genre";
import Tempo from "./tempo";


const Dashboard = () => {
  const imagePath = require('./website.gif');
  const genres = [
    'acoustic', 'afrobeat', 'alt-rock', 'alternative', 'ambient', 'anime',
    'black-metal', 'bluegrass', 'blues', 'bossanova', 'brazil', 'breakbeat',
    'british', 'cantopop', 'chicago-house', 'children', 'chill', 'classical',
    'club', 'comedy', 'country', 'dance', 'dancehall', 'death-metal',
    'deep-house', 'detroit-techno', 'disco', 'disney', 'drum-and-bass', 'dub',
    'dubstep', 'edm', 'electro', 'electronic', 'emo', 'folk', 'forro', 'french',
    'funk', 'garage', 'german', 'gospel', 'goth', 'grindcore', 'groove',
    'grunge', 'guitar', 'happy', 'hard-rock', 'hardcore', 'hardstyle',
    'heavy-metal', 'hip-hop', 'holidays', 'honky-tonk', 'house', 'idm',
    'indian', 'indie', 'indie-pop', 'industrial', 'iranian', 'j-dance', 'j-idol',
    'j-pop', 'j-rock', 'jazz', 'k-pop', 'kids', 'latin', 'latino', 'malay',
    'mandopop', 'metal', 'metal-misc', 'metalcore', 'minimal-techno', 'movies',
    'mpb', 'new-age', 'new-release', 'opera', 'pagode', 'party', 'philippines-opm',
    'piano', 'pop', 'pop-film', 'post-dubstep', 'power-pop', 'progressive-house',
    'psych-rock', 'punk', 'punk-rock', 'r-n-b', 'rainy-day', 'reggae', 'reggaeton',
    'road-trip', 'rock', 'rock-n-roll', 'rockabilly', 'romance', 'sad', 'salsa',
    'samba', 'sertanejo', 'show-tunes', 'singer-songwriter', 'ska', 'sleep',
    'songwriter', 'soul', 'soundtracks', 'spanish', 'study', 'summer', 'swedish',
    'synth-pop', 'tango', 'techno', 'trance', 'trip-hop', 'turkish', 'work-out',
    'world-music'
  ];
  
return (
    <div>
      <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Tempo Fit</h1>
            <p class="hero-subtitle">A Music Discovery Tool for your workouts</p>
            <a href="#generate" class="hero-cta">Learn More</a>
        </div>
      </section>
        <div className="background-wrapper">
          <div className="big-block" id="generate"> 
            <div class="block">
              <p className="generate-description">Using the Spotify API, we analyze the audio features of songs in your Spotify library, including tempo and genre, and curate playlists that match your preferences.</p>
              <p className="generate-description">Beats per minutes in a song can help you time your reps, know when to boost your cadence, focus you in on your workout, and even help you regulate your breathing and heart rate.</p>
              <p className="generate-description">Incorporating tempo-based playlists into workouts can be an effective way to leverage the power of music to enhance the overall workout experience.</p>
              </div>
              {/* <div class="block">
                <p>Enter the desired tempo in BPM, select genres for the songs, and specify the amount of songs, then let the app generate a playlist for you!</p>
                <img src={imagePath} class="how-to" alt="Picture of a bodybuilder" />
              </div> */}
              <div class="block">
                <h2 className='genre-header'>Genres</h2>
                  <p>Genres that can be used the playlist generator</p>
                  <div class="genre-container">
                    <ul class="genre-list">
                      {genres.map(genre => (
                        <li key={genre} className="genre-item">{genre}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              <div>
          </div>

        </div>
      <div>
          <Recommendations />
          <h3 id='profile'>Spotify Stats</h3>
          <p>This is a fun little section about you're own listening habits on spotify wheiter it's your top five artists, tracks or just the most listened genre that you're currently into.</p>
          </div>
            <Profile />
      </div>
    </div>
  );
}

export default Dashboard