const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please provide email and password." });
    }

    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: "User successfully signed up." });
    } catch (error) {
        console.error("Error during signup: ", error);
        res.status(500).json({ error: "Error during signup." });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please provide email and password." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid credentials." });
        }

        res.status(200).json({ message: "Login successful.", token: "dummy-token" }); // Token simulation
    } catch (error) {
        console.error("Error during login: ", error);
        res.status(500).json({ error: "Error during login." });
    }
});

// Catch-all for unknown endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found." });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
