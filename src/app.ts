// src/app.ts
import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json());

connectDB();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
