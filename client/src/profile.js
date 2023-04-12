import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import Energy from "./energy";
import Popularity from './popularity';

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
    <div class="container">
        <div class="row">
          <div class="col mx-auto text-center">
            <h1>Infographic</h1>
            <div className="profile-container">
              <img src={profileData.images[0].url} alt="Profile Image" className="profile-image" />
              <div className="profile-info">
              <p className='display-name'>{profileData.display_name} </p>
              <p className='followers'>Followers: {profileData.followers.total}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h2>Left Column</h2>
            <p>This is the left column content of the second row.</p>
            <Energy />
          </div>
          <div class="col-md-6">
            <h2>Right Column</h2>
            <p>This is the right column content of the second row.</p>
            <Popularity />
          </div>
        </div>
      </div>
  );
};

export default Profile;
