import dotenv from 'dotenv';
dotenv.config();
console.log('MongoDB URI:', process.env.MONGO_URI); // Debug



import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://jjharmon:Lumbeeland420@cluster0.yu66w.mongodb.net/mern-course?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const port = process.env.PORT || 5003;  // Change port to 5001 or another unused one
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
