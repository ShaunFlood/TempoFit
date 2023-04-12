import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

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
    <div class='container'>
      {/* <button onClick={() => window.location.href = 'http://localhost:8888/logout'}>
        Log out
      </button> */}
      <h3>About you</h3>
      <img src={profileData.images[0].url} class='profileimage'></img>
      <h1 class='heading'>{profileData.display_name}</h1>
      <p class='information'>Followers: {profileData.followers.total}</p>
      <p class='information'>Product: {profileData.product}</p>
    </div>
  );
};

export default Profile;
