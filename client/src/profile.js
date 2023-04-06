import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8888/profile', { withCredentials: true });
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => window.location.href = 'http://localhost:8888/logout'}>
        Log out
      </button>
      <h1>{profileData.display_name}</h1>
      <p>Followers: {profileData.followers.total}</p>
      <img src={profileData.images[0]}></img>
    </div>
  );
};

export default Profile;
