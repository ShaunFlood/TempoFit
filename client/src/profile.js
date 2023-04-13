import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import Energy from "./energy";
import Popularity from './popularity';
import Tempo from './tempo';
import Genre from './genre';
import { FaSpotify } from 'react-icons/fa';

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
          <div class="col text-center"> 
            <h1>Spotify Statistics</h1>
          </div>
          <div class="col text-center"> 
            <div class="profile-container">
              <img src={profileData.images[0].url} alt="Profile Image" class="profile-image" />
              <div class="profile-info">
                <p class="display-name">{profileData.display_name}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <Energy />
            <Tempo />
          </div>
          <div class="col-md-6">
            <Popularity />
            <Genre />
          </div>
        </div>
      </div>
  );
};

export default Profile;
