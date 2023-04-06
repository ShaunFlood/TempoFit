import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => window.location.href = 'http://localhost:8888/login'}>
        Login with Spotify
      </button>
    </div>
  );
}

export default Login;
