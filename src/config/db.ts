import mongoose from 'mongoose';

// Connect to MongoDB
const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || 'your_mongo_connection_string';
    
    // Connect to MongoDB using Mongoose
    await mongoose.connect(dbURI);
    
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

// Enable mongoose debugging (optional)
mongoose.set('debug', true);

export default connectDB;
