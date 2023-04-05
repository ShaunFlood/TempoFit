require('dotenv').config();
CLIENT_ID = process.env.CLIENT_ID;
CLIENT_SECRET = process.env.CLIENT_SECRET;
REDIRECT_URI = process.env.REDIRECT_URI

const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express()
const port = 8888

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

const stateKey = 'spotify_auth_state';

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
    const scope = 'user-read-private user-read-email';
    const queryParams = querystring.stringify({
        client_id: CLIENT_ID, //what app is being used by spotify
        response_type: 'code', 
        redirect_uri: REDIRECT_URI, //where we get redirected 
        state: state, //state adds security to the backend.
        scope: scope, //scopes gives us access to what we can use from the user.
    }); //formats all the query in to a string, so it's smaller.
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
  });

  app.get('/callback', (req, res) => {
    const code = req.query.code || null;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        if (response.status === 200) {
          const { access_token, refresh_token, expires_in } = response.data;
  
          const queryParams = querystring.stringify({
            access_token,
            refresh_token,
          });
  
          res.redirect(`http://localhost:3000/?${queryParams}`);
  
        } else {
          res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
        }
      })
      .catch(error => {
        res.send(error);
      });
  });

app.get('/refresh_token', (req, res) => {
    const { refresh_token } = req.query;
    
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send(error);
      });
  });

app.listen(port, () => {
    console.log(`Server hosted on port:${port}`);
});