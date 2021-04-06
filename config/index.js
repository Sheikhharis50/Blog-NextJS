const dev = process.env.NODE_ENV !== 'production';

const LIVE_URL = 'http://yourwebsite.com/api/';
const DEV_URL = 'http://localhost:3000/api/';
var BASE_URL = dev ? DEV_URL : LIVE_URL;

export {
    BASE_URL
}