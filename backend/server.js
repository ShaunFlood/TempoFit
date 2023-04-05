require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const cors = require('cors');
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8888;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const generateRandomString = length => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);
  const scope = 'user-read-private user-read-email';
  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.status(401).send('State mismatch error');
    return;
  }

  res.clearCookie(stateKey);

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', REDIRECT_URI);
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);

  axios
    .post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => {
      const access_token = response.data.access_token;
      const expires_in = response.data.expires_in;
      const refresh_token = response.data.refresh_token;
      res.cookie('access_token', access_token, { httpOnly: true, maxAge: expires_in * 1000 });
      res.redirect('/');
    })
    .catch(error => {
      console.error('Error:', error);
      res.send(error);
    });
});

app.get('/profile', (req, res) => {
  const access_token = req.cookies.access_token;

  axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.send(error);
    });
});

app.get('/recommendations', (req, res) => {
  const access_token = req.cookies.access_token;

  const queryParams = {
    limit: 20,
    max_tempo: 140,
    min_tempo: 120,
    target_tempo: 130,
    seed_genres: 'house',
  };

  axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/recommendations',
    params: queryParams,
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Server hosted on port:${port}`);
});
