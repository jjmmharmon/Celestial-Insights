import mongoose from 'mongoose';

// MongoDB connection function
const connectDB = async () => {
    try {
        // Connect to MongoDB using mongoose
        await mongoose.connect(process.env.MONGO_URI || '', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        } as mongoose.ConnectOptions); // Explicit type casting for newer versions
        console.log('MongoDB connected!');
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
