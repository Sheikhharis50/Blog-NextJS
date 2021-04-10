const dev = process.env.NODE_ENV !== 'production';

const LIVE_URL = 'http://yourwebsite.com/api/';
const DEV_URL = `http://localhost:3000/api/`;
const BASE_URL = dev ? DEV_URL : LIVE_URL;
const ENV = dev;

export {
    ENV,
    BASE_URL
}