import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'https://gateway.marvel.com/v1/public';
const { PUBLIC_KEY, PRIVATE_KEY } = process.env;

const ts = new Date().getTime();
const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const apiMarvel = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: PUBLIC_KEY,
    ts,
    hash,
  },
});
