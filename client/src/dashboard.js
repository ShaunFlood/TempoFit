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
            <div className="intro">
              <h1>Elevate your workouts with Music</h1>
              <div>
                <h3>How does it work?</h3>
                <p>Introducing TempoFit, the ultimate music discovery app powered by the Spotify API! TempoFit generates playlists based on the tempo on your favourite genres, allowing you to discover new music that matches your mood and energy level for your workouts. Simply enter a genre and average beats per minute you want the playlist to have, and TempoFit will create a custom playlist filled with tracks that will help elvate your workout.</p>
              </div>
              <div className="gettingstarted">
                <div className="text-container">
                <h3>Get started!</h3>
                <p>Enter the desired tempo in BPM, select genres for the songs, and specify the amount of songs, then let the app generate a playlist for you! </p>
                <p>You can enter multiple genres for some versitality in the playlist by just seperating by a comma in the search field. Example of this is 'edm,pop,hip-hop'</p>
                <p>TempoFit will generate the songs by spotify next to the form. Where you can save the playlist to your own spotify account, so it can be used for a workout.</p>
                </div>
                <img src={imagePath} className="howto"/>
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