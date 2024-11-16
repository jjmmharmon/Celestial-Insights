import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User';  // Importing the User model

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI as string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Error connecting to MongoDB:", err));

// Routes
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send("Please provide all required fields.");
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send("Email already in use.");
        }

        const newUser = new User({ username, email, password });
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
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
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
