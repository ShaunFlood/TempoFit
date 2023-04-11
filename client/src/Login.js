import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSpotify } from 'react-icons/fa';
import './Login.css'

function Login() {
  return (
    <div className="background">
      <button onClick={() => window.location.href = 'http://localhost:8888/login'} className="btn btn-primary" style={{ backgroundColor: '#1db954', border: 'black'}}><FaSpotify /> Login with Spotify
    </button>
    </div>
    
  );
}

export default Login;
