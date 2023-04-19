import Profile from "./profile";
import './dashboard.css'
import Recommendations from "./recommendations";

const Dashboard = () => {
  const imagePath = require('./website.gif');
  
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
            <div>
              <h1>Elevate your workouts with Music</h1>
              <div>
                <h3>How does it work?</h3>
                <p>Using the Spotify API, we analyze the audio features of songs in your Spotify library, including tempo and genre, and curate playlists that match your preferences.</p>
                <p> big piggies</p>
              </div>
              <div>
                <h3>Get started!</h3>
                <p>Enter the desired tempo in BPM, select genres for the songs, and specify the amount of songs, then let the app generate a playlist for you! </p>
                <img src={imagePath}/>
                <p>Incorporating tempo-based playlists into workouts can be an effective way to leverage the power of music to enhance the overall workout experience.</p>
                </div>
              </div>
          </div>
        </div>
      <div>
          <Recommendations />
          <h3 id='profile'>Spotify Stats</h3>
          <p>This is a fun little section about you're own listening habits on spotify wheiter it's your top five artists, tracks or just the most listened genre that you're currently into.</p>
          </div>
            <Profile />
      </div>
);

}

export default Dashboard