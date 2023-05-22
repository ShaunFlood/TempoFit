import './dashboard.css'
import Recommendations from "./recommendations";
import Footer from './footer';

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
            <h1 className="h1">Elevate your workouts with Music</h1>
              <div className="firstpart">
              <div>
                    <h3>How does it work?</h3>
                    <p>TempoFit generates playlists based on the tempo of your favourite genres, allowing you to discover new music that matches your mood and energy level for your workouts. Simply enter a genre and average beats per minute you want the playlist to have, and TempoFit will create a custom playlist filled with tracks that will help elvate your workout.</p>
                    <p>You can save the playlist to your own spotify account by clicking the save button, so it can be easiliy used for your workouts.</p>
                    <p>You can enter multiple genres for some versitality in the playlist by just seperating each genre by a comma in the search field. An example of this is 'edm,pop,hip-hop'</p>
                    <video src={videoPath} width="43%" height="43%" controls autoplay loop>
                      Your browser does not support the video tag.
                    </video>
                   
                  </div>
              </div>
              <div>
                  <div className="text-container">
                  <a href="#form" class="hero-cta" style={{backgroundColor: "#00adb5"}}>Start Generating</a>
                      <div id="form">
                        <Recommendations />
                        </div>
                      </div>
              </div> 
            </div>
          </div>
        </div>

);

}

export default Dashboard