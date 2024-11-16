import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/auth', authRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
