const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Used to create a JWT token for user sessions
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

// Middleware to check the JWT token in the authorization header
function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Get the token from 'Authorization' header

    if (!token) {
        return res.status(403).send("Access denied. No token provided.");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid token.");
        }
        req.user = decoded; // Attach user info to the request object
        next(); // Continue to the next middleware/route handler
    });
}

// Routes

// Signup route
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

// Login route
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

        // Create a JWT token for the user session
        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send("Error during login.");
    }
});

// Logout route (simple version, would generally clear session or JWT token)
app.post('/logout', (req, res) => {
    // This is a simple version. In a real app, you would clear cookies or tokens
    res.status(200).send("Logged out successfully.");
});

// Protected Route (Example of a route that requires authentication)
app.get('/protected', verifyToken, (req, res) => {
    res.status(200).send(`Hello, ${req.user.username}. You have access to this protected route.`);
});

// Server Start
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
