import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db'; // Import the database connection function

dotenv.config(); // Initialize environment variables
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to the database
connectDB();

// Example route
app.get('/', (req, res) => {
    res.send('Hello from Celestial Insight!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
