import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();
console.log('MongoDB URI:', process.env.MONGO_URI); // Debug

// Initialize the app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || 'mongodb+srv://jjharmon:Lumbeeland420@cluster0.yu66w.mongodb.net/mern-course?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Celestial Insight!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
