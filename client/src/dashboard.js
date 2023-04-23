import './dashboard.css'
import Recommendations from "./recommendations";

const Dashboard = () => {
  const videoPath = require('./starting.mp4')
  
return (
      <div>
      <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Tempo Fit</h1>
            <p class="hero-subtitle">A Music Discovery Tool for your workouts</p>
            <a href="#generate" class="hero-cta" style={{backgroundColor: "#00adb5"}}>Learn More</a>
        </div>
      </section>
        <div className="background-wrapper">
          <div className="big-block" id="generate"> 
            <div className="intro">
              <div className="firstpart">
                <h1 className="h1">Elevate your workouts with Music</h1>
                  <div>
                    <h3>How does it work?</h3>
                    <p>Introducing TempoFit, the ultimate music discovery app powered by the Spotify API! TempoFit generates playlists based on the tempo of your favourite genres, allowing you to discover new music that matches your mood and energy level for your workouts. Simply enter a genre and average beats per minute you want the playlist to have, and TempoFit will create a custom playlist filled with tracks that will help elvate your workout.</p>
                  </div>
              </div>
              <div className="gettingstarted">
                <video src={videoPath} width="50%" height="50%" controls autoplay loop>
                  Your browser does not support the video tag.
                </video>
                  <div className="text-container">
                    <h3>Get started!</h3>
                      <p>Enter the desired tempo in BPM, select genres for the playlist, and specify the amount of songs that you want, then let the app generate a playlist for you! </p>
                      <p>You can enter multiple genres for some versitality in the playlist by just seperating each genre by a comma in the search field. An example of this is 'edm,pop,hip-hop'</p>
                      <p>TempoFit will generate the songs by spotify next to the form.</p>
                      <p>Where you can save the playlist to your own spotify account by clicking the save button, so it can be easiliy used for your workouts.</p>
                      <a href="#form" class="hero-cta" style={{backgroundColor: "#00adb5"}}>Start Generating</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      <div id="form">
          <Recommendations />
          </div>
      </div>
);

}

export default Dashboard