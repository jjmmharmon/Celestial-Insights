const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.use(express.json());

// Define routes (example route)
app.post('/signup', (req, res) => {
  // Handle signup logic here
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
