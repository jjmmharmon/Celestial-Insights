const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User'); // Assuming you have a User model
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env or app.env

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Routes
// Sign up route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Please provide all required fields.");
    }

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send("User successfully signed up.");
    } catch (error) {
        res.status(500).send("Error during signup.");
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Please provide both username and password.");
    }

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).send("Invalid credentials.");
        }
        res.status(200).send("Login successful.");
    } catch (error) {
        res.status(500).send("Error during login.");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
