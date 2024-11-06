// config.js
const config = {
    BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:5000' 
        : 'https://your-app.herokuapp.com'
};

export default config;
