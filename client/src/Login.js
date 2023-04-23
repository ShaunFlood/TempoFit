import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSpotify } from 'react-icons/fa';
import './Login.css';

function Login() {

  return (
    <div className="background">
      <div className="login-container">
        <h1 className="login-heading">Tempo Fit</h1>
        <h5 className="login-undertext">Get in the rhythm of your day with our tempo-based playlist generator</h5>
        <button id="login-but" onClick={() => window.location.href = 'http://localhost:8888/login'} className="btn btn-primary"><FaSpotify /> Login with Spotify</button>
      </div>
    </div>
  );
}

export default Login;
