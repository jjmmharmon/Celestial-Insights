import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // MongoDB URI from .env file
    if (!dbURI) {
      console.error("MongoDB URI is not defined");
      return;
    }
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
