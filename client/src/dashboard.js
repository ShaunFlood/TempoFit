import Profile from "./profile";
import CurrentPlaylists from "./currentPlaylist";
import './dashboard.css'
import Recommendations from "./recommendations";

const Dashboard = () => {


return (
    <div>
        <div class="blurb-container">
            <div class="blurb">
                <p>TempoFit is the ultimate music recommendation app for all music and gym lovers out there! With its advanced algorithm powered by the Spotify API, TempoFit generates the perfect playlist based on your favorite genres and mood. Whether you're feeling upbeat and ready to dance or in the mood for some relaxing tunes, TempoFit has got you covered. With a few simple clicks, you'll have access to the perfect playlist tailored just for you.</p>
            </div>
        </div>
        <Profile />
        <CurrentPlaylists />
        <Recommendations />
    </div>
  );
}

export default Dashboard