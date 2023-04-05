import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/recommendations')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.display_name}</h2>
          <img src={user.images[0].url} alt={user.display_name} />
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
