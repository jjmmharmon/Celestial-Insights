const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const User = require('./models/User');  // Assuming User model is in ./models/User

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("Please provide all required fields.");
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("Email already in use.");
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send("User successfully signed up.");
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send("Error during signup.");
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Please provide both username and password.");
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send("Invalid credentials.");
    }
    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      return res.status(401).send("Invalid credentials.");
    }
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Error during login.");
  }
});

// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
