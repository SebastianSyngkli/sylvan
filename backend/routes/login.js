const express = require('express');
const User = require('../models/auth');
const jwt = require('jsonwebtoken');
const { isUser, isAdmin } = require('../middleware/auth'); // Assuming isUser middleware checks for user role

const router = express.Router();

const secretKey = 'yourSecretKey'; // Replace with your actual secret key

router.post('/',  async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!user.verified) {
      return res.status(401).json({ message: 'Email not verified' });
    }

    const token = jwt.sign({ userId: user._id, name: user.name }, secretKey, { expiresIn: '1h' });
    res.json({ token, name: user.name });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
