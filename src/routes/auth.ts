import { Router, Request, Response } from 'express';
import User from '../models/User';

const router = Router();

// Sign-up route
router.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with hashed password
    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Sign-up error:', error);
    res.status(500).json({ message: 'Error during sign-up' });
  }
});

// Log-in route
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error during login' });
  }
});

export default router;
