const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Assuming you have a User model

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Error connecting to MongoDB:", err));

// Routes
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send("Please provide all required fields.");
    }
    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send("Email already in use.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User successfully signed up.");
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).send("Error during signup.");
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("Please provide both username and password.");
    }
    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send("Invalid credentials.");
        }

        // Compare the provided password with the hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send("Invalid credentials.");
        }

        res.status(200).send("Login successful.");
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send("Error during login.");
    }
});

// Server Start
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
