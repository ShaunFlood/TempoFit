import Profile from "./profile";
import './dashboard.css'
import Recommendations from "./recommendations";
import Energy from "./energy";
import Popularity from "./popularity";
import Genre from "./genre";
import Tempo from "./tempo";

const Dashboard = () => {
return (
    <div>
      <nav className="navbar navbar-light" id="navbar-example2">
        <a className="navbar-brand" href="#">Tempo Fit</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#generate">Generate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#profile">Statistics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:8888/logout">Log out</a>
          </li>
        </ul>
      </nav>
      <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Tempo Fit</h1>
            <p class="hero-subtitle">A Music Discovery Tool for your workouts</p>
            <a href="#generate" class="hero-cta">Learn More</a>
        </div>
        </section>
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <h3 id='generate'>Generate</h3>
        <p>Using the Spotify API, we analyze the audio features of songs in your Spotify library, including tempo and genre, and curate playlists that match your preferences. Whether you want an upbeat playlist for your workout routine or a relaxing playlist for a cozy evening, our playlist generator can help. Simply input your preferred genre and BPM, and let our algorithm create a random playlist that averages to your desired BPM, filled with songs from your chosen genre. Explore new tracks and discover your favorite songs with our customized playlists!"</p>
        <Recommendations />
        <h3 id='profile'>Spotify Stats</h3>
        <p>This is a fun little section about you're own listening habits on spotify wheiter it's your top five artists, tracks or just the most listened genre that you're currently into.</p>
        <Profile />
        <Energy />
        <Popularity />
        <Genre />
        <Tempo />
      </div>
    </div>
  );
}

export default Dashboard