import Profile from "./profile";
import CurrentPlaylists from "./currentPlaylist";
import GeneratePlaylist from "./recommendations";

const Dashboard = () => {


return (
    <div>
      <Profile />
      <CurrentPlaylists />
      <GeneratePlaylist />
    </div>
  );
}

export default Dashboard