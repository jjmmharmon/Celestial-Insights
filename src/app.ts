import dotenv from 'dotenv';
dotenv.config();
console.log('MongoDB URI:', process.env.MONGO_URI); // Debug



import express from 'express';
<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db'; // Import the database connection function
>>>>>>> f17ba62afc56fff8efb5f036bfde0c429395d7e4

dotenv.config(); // Initialize environment variables
const app = express();

<<<<<<< HEAD
// Connect to MongoDB
mongoose.connect('mongodb+srv://jjharmon:Lumbeeland420@cluster0.yu66w.mongodb.net/mern-course?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const port = process.env.PORT || 5003;  // Change port to 5001 or another unused one
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
=======
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
>>>>>>> f17ba62afc56fff8efb5f036bfde0c429395d7e4
});
