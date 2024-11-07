// src/routes/auth.ts
import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send("User signed up successfully");
  } catch (error) {
    res.status(500).send("Error during signup");
  }
});

export default router;
