// You can add any necessary configurations here
module.exports = {
    // MongoDB URI (should be placed in .env or app.env)
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mern-course",
    
    // Optional: Define other configurations like port, secret keys, etc.
    secretOrKey: process.env.SECRET_KEY || "mysecretkey"
};
