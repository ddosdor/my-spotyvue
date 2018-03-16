import axios from 'axios';

import spotifyAuth from './../spotify-auth';

const myHeaders = {};
const myConfig = {};

myConfig.headers = myHeaders;

const api = axios.create(myConfig);

export const API_URL = 'https://api.spotify.com/v1/';
export const API = api;
export const SPOTYFIY = {
  CLIENT_ID: spotifyAuth.CLIENT_ID,
  REDIRECT_URI: spotifyAuth.REDIRECT_URI,
};
