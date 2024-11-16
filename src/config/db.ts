import mongoose from 'mongoose';

// Connect to MongoDB
const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || 'your_mongo_connection_string';
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
