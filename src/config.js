import axios from 'axios';

const myHeaders = {};
const myConfig = {};

myConfig.headers = myHeaders;

const api = axios.create(myConfig);

export const API_URL = 'https://api.spotify.com/v1/';
export const API = api;
