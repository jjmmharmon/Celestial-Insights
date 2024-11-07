import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from custom env file
dotenv.config({ path: './env.env' });

const connectDB = async () => {
  try {
    // Connect to MongoDB using the MONGO_URI from env file
    await mongoose.connect(process.env.MONGO_URI || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
