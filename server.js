const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User'); // Assuming you have a User model
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load environment variables from .env or app.env

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Routes
// Sign up route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Please provide all required fields." });
    }

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User successfully signed up." });
    } catch (error) {
        console.error("Error during signup: ", error);
        res.status(500).json({ error: "Error during signup." });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Please provide both username and password." });
    }

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid credentials." });
        }
        res.status(200).json({ message: "Login successful." });
    } catch (error) {
        console.error("Error during login: ", error);
        res.status(500).json({ error: "Error during login." });
    }
});

// Fallback route for unknown endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found." });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
